import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulated login API call - in a real app, this would call an actual API
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      // Simulate API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          if (credentials.username === 'student' && credentials.password === 'password') {
            resolve({ 
              user: { 
                id: '1',
                username: credentials.username,
                name: 'Student Name',
                role: 'student'
              },
              token: 'sample_token_12345'
            });
          } else {
            throw new Error('Invalid credentials');
          }
        }, 1000);
      });
      
      // Store token in localStorage
      localStorage.setItem('token', response.token);
      return response.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async () => {
    localStorage.removeItem('token');
    return null;
  }
);

// Check if user is already logged in
const getInitialUser = () => {
  const token = localStorage.getItem('token');
  if (token) {
    // In a real app, you would validate the token and get user data
    return { 
      id: '1', 
      username: 'student',
      name: 'Student Name',
      role: 'student'
    };
  }
  return null;
};

const initialState = {
  user: getInitialUser(),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer; 