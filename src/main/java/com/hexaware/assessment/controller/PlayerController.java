package com.hexaware.assessment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.assessment.dto.PlayerDTO;
import com.hexaware.assessment.entity.Player;
import com.hexaware.assessment.service.IPlayerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/players")
public class PlayerController {
	@Autowired
	IPlayerService service;
	
	@GetMapping("/getall")
	public List<Player> getAllPlayers(){
		return service.getAllPlayers();
	}
	@GetMapping("/get/{playerId}")
	public PlayerDTO getPlayerById(@PathVariable int playerId ) {
		return service.getPlayerById(playerId);
		
	}
	@PostMapping("/add")
	public Player addPlayer(@Valid @RequestBody PlayerDTO dto) {
		return service.addPlayer(dto);
	}
	@PutMapping("/update/{playerId}")
	public Player updatePlayer(@PathVariable int playerId,@RequestBody PlayerDTO dto) {
		return service.updatePlayer(playerId, dto);
	}
	@DeleteMapping("/delete/{playerId}")
	public void deletePlayer(@PathVariable int playerId) {
		service.deletePlayer(playerId);
		
	}

	@GetMapping("/batsman")
	public List<Player> getAllBatsman(){
		return service.getAllBatsman();
	}
}
