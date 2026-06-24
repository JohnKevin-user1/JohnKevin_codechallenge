package com.hexaware.assessment.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.assessment.dto.PlayerDTO;
import com.hexaware.assessment.entity.Player;
import com.hexaware.assessment.repository.PlayerRepository;
import com.hexaware.assessment.service.IPlayerService;
@Service
public class PlayerServiceImpl implements IPlayerService{
	@Autowired
	PlayerRepository repo;

	@Override
	public Player addPlayer(PlayerDTO dto) {
		Player ply = new Player();
		
		ply.setPlayerId(dto.getPlayerId());
		ply.setPlayerName(dto.getPlayerName());
		ply.setJerseyNum(dto.getJerseyNum());
		ply.setRole(dto.getRole());
		ply.setTotalMatches(dto.getTotalMatches());
		ply.setTeamName(dto.getTeamName());
		ply.setCountry(dto.getCountry());
		ply.setDescription(dto.getDescription());
		
		
		return repo.save(ply);
	}

	@Override
	public PlayerDTO getPlayerById(int playerId) {
		Player ply = repo.findById(playerId).orElse(null);
		if(ply == null) {
			return null;
		}
		PlayerDTO dto = new PlayerDTO();
		
		dto.setPlayerId(ply.getPlayerId());
		dto.setPlayerName(ply.getPlayerName());
		dto.setJerseyNum(ply.getJerseyNum());
		dto.setRole(ply.getRole());
		dto.setTotalMatches(ply.getTotalMatches());
		dto.setTeamName(ply.getTeamName());
		dto.setCountry(ply.getCountry());
		dto.setDescription(ply.getDescription());
		
		return dto;
		
		
	}

	@Override
	public List<Player> getAllPlayers() {
		
		return repo.findAll();
	}

	@Override
	public Player updatePlayer(int playerId, PlayerDTO dto) {
		Player ply = repo.findById(playerId).orElse(null);
		if(ply == null) {
			return null;			
		}
		ply.setPlayerId(dto.getPlayerId());
		ply.setPlayerName(dto.getPlayerName());
		ply.setJerseyNum(dto.getJerseyNum());
		ply.setRole(dto.getRole());
		ply.setTotalMatches(dto.getTotalMatches());
		ply.setTeamName(dto.getTeamName());
		ply.setCountry(dto.getCountry());
		ply.setDescription(dto.getDescription());
		
		
		return repo.save(ply);
		
		
	}

	@Override
	public void deletePlayer(int playerId) {
		repo.deleteById(playerId);
		
	}

	@Override
	public List<Player> getAllBatsman() {
		
		return repo.getAllBatsman();
	}

	

}
