
-- Create user profiles table to store additional user information
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT,
  phone TEXT,
  location TEXT,
  user_type TEXT CHECK (user_type IN ('Tenant', 'House owner')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL Security;

-- Create policies for profiles table
CREATE POLICY "Users can view their own profile" 
  ON public.profiles 
  FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles 
  FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles 
  FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- Create properties table for storing property listings
CREATE TABLE public.properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  location TEXT NOT NULL,
  rooms TEXT,
  rent INTEGER NOT NULL,
  measurement TEXT,
  description TEXT,
  is_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for properties
ALTER TABLE public.properties ENABLE ROW LEVEL Security;

-- Create policies for properties table
CREATE POLICY "Anyone can view available properties" 
  ON public.properties 
  FOR SELECT 
  USING (is_available = TRUE);

CREATE POLICY "Owners can manage their properties" 
  ON public.properties 
  FOR ALL 
  USING (owner_id = auth.uid());

-- Create function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, phone, location, user_type)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'name',
    NEW.raw_user_meta_data->>'phone',
    NEW.raw_user_meta_data->>'location',
    NEW.raw_user_meta_data->>'user_type'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile when user signs up
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert some sample properties for testing
INSERT INTO public.properties (type, location, rooms, rent, measurement, description) VALUES
('FAMILY HOUSE', 'MIRPUR - 12', '02', 12000, NULL, 'Spacious family house with modern amenities'),
('BACHELOR HOUSE', 'MIRPUR PALLABI', '03', 8000, NULL, 'Comfortable bachelor accommodation'),
('COMMERCIAL SPACE', 'MIRPUR - 12', '', 50000, '3000 SQ FT', 'Prime commercial space for business'),
('ROOMMATE REQUIRED', 'DHANMONDI', '01', 6000, NULL, 'Looking for a roommate to share expenses'),
('BACHELOR APARTMENT', 'GULSHAN', '02', 15000, NULL, 'Modern bachelor apartment in prime location'),
('FAMILY HOUSE', 'UTTARA', '04', 25000, NULL, 'Large family house with garden');
