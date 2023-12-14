import { RegistrationFormState } from "../models/RegistrationForm";

interface RegisterResponse {
  error: string
}
async function register(registerData: RegistrationFormState): Promise<RegisterResponse> {
  const baseUrl = 'http://localhost:5000/users/signUp';
  try {
    const resp = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData)
    });
    if (!resp.ok) {
      const errorResponse: RegisterResponse = await resp.json();
      throw new Error(`Server error: ${errorResponse.error}`);
    }

    return await resp.json();
  } catch (e) {
    console.error(e);
    return { error: 'Error during registration' };
  }
}

export { register }