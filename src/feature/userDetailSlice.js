import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"


// action creater

// CRUD OPERATION 

// CREATE

export const createUser=createAsyncThunk("user/createUser",async(data,{rejectWithValue})=>{
    const response=await fetch("https://656836719927836bd974425f.mockapi.io/crud",{
        method:"POST",
        headers:{
            "content-Type":"application/json",
        },
        body:JSON.stringify(data)
    });

    try{
        const result =await response.json();
        return result
    }
    catch(error){
        return rejectWithValue(error)
    }
})


// READ


export const showUser=createAsyncThunk("Read",async(args,{rejectWithValue})=>{
    const response=await fetch("https://656836719927836bd974425f.mockapi.io/crud");
    try{
        const result= response.json();
        return result;
    }
    catch(error){
        return rejectWithValue(error)
    }
})

// DELETE USER
export const deleteUser=createAsyncThunk("Delete",async(id,{rejectWithValue})=>{
    const response=await fetch(`https://656836719927836bd974425f.mockapi.io/crud/${id}`,
    {
        method:"DELETE"
    });
    try{
        const result= response.json();
        return result;
    }
    catch(error){
        return rejectWithValue(error)
    }
})

// UPDATE

export const updateUser = createAsyncThunk(
    "updateUser",
    async (data, { rejectWithValue }) => {
      console.log("updated data", data);
      const response = await fetch(
        `https://641dd63d945125fff3d75742.mockapi.io/crud/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
  
      try {
        const result = await response.json();
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );


export const userDetail=createSlice({
    name:'userDetail',
    initialState:{
        users:[],
        loading:false,
        error:null,
    },
    extraReducers: (builder) => {
        builder
          .addCase(createUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
          })
          .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.users = action.payload;
          })
          .addCase(showUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(showUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users=action.payload;
          })
          .addCase(showUser.rejected, (state, action) => {
            state.loading = false;
            state.users = action.payload;
          })
          .addCase(deleteUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            const {id} = action.payload;

            if(id){
                state.users=state.users.filter((ele)=>ele.id!==id)
            }
            
          })
          .addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.users = action.payload;
          })
          .addCase(updateUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.map((ele) =>
            ele.id === action.payload.id ? action.payload : ele);         
           })
          .addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.users = action.payload.message;
          })
      },
})

export default userDetail.reducer;