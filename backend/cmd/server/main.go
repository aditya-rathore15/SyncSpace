package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"syncspace-backend/internal/handlers"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Set up routes
	http.HandleFunc("/health", handlers.HealthCheckHandler)
	http.HandleFunc("/", handlers.RootHandler)

	// Start server
	addr := fmt.Sprintf(":%s", port)
	log.Printf("SyncSpace Backend starting on %s...", addr)
	
	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Fatal(err)
	}
}