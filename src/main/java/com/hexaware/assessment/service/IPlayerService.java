package com.hexaware.assessment.service;

import java.util.List;

import com.hexaware.assessment.dto.PlayerDTO;
import com.hexaware.assessment.entity.Player;

public interface IPlayerService {
	
	Player addPlayer(PlayerDTO dto);
	
	PlayerDTO getPlayerById(int playerId );
	
	List<Player> getAllPlayers();
	
	Player updatePlayer(int playerId,PlayerDTO dto);
	
	void deletePlayer(int playerId);
	
	List<Player> getAllBatsman();
	
}
