// import { api } from "../../services/api";

interface LoginPayload {
	email: string;
	password: string;
}

export const login = async (data: LoginPayload) => {
	// const response = await api.post("/auth/login", data);
	// return response.data;
	await new Promise((resolve) => setTimeout(resolve, 800));

	return {
		success: true,
		user: {
			id: "1",
			email: data.email,
			name: "Test User",
		},
		token: "mock-jwt-token",
	};
};
