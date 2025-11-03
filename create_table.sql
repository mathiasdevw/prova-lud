CREATE TABLE ranking (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  score INTEGER NOT NULL,
  percentage INTEGER NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE ranking ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir inserções anônimas
CREATE POLICY "Allow anonymous inserts" ON ranking FOR INSERT WITH CHECK (true);

-- Criar política para permitir leituras anônimas
CREATE POLICY "Allow anonymous reads" ON ranking FOR SELECT USING (true);

