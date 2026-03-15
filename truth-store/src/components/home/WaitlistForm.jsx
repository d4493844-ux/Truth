import { useState } from 'react';
import styled from 'styled-components';
import { supabase } from '../../lib/supabase';
import Button from '../ui/Button';

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.85rem;
  outline: none;
  transition: border-color 0.2s;
  &::placeholder { color: ${({ theme }) => theme.colors.textDim}; }
  &:focus { border-color: ${({ theme }) => theme.colors.accent}; }
`;

const Msg = styled.p`
  font-size: 0.75rem;
  color: ${({ $error, theme }) => $error ? theme.colors.accent : theme.colors.success};
  text-align: center;
`;

export default function WaitlistForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    setLoading(true);
    try {
      if (supabase) {
        const { error } = await supabase
          .from('waitlist')
          .insert([{ full_name: name, email }]);
        if (error) throw error;
      }
      setStatus({ ok: true, msg: "You're on the list. Stay tuned." });
      setName(''); setEmail('');
    } catch {
      setStatus({ ok: false, msg: 'Something went wrong. Try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form>
      <Input placeholder="Full-name" value={name} onChange={e => setName(e.target.value)} />
      <Input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <Button onClick={handleSubmit} disabled={loading} full>
        {loading ? 'Submitting...' : 'Submit'}
      </Button>
      {status && <Msg $error={!status.ok}>{status.msg}</Msg>}
    </Form>
  );
}
