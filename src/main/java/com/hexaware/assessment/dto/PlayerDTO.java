package com.hexaware.assessment.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;

public class PlayerDTO {
	
	
	private int playerId;
	@NotBlank
	private String playerName;
	@Positive
	private int jerseyNum;
	@NotBlank
	@Pattern(
		    regexp = "^(Batsman|Bowler|Keeper|All Rounder)$",
		    message = "Role must be Batsman, Bowler, Keeper or All Rounder"
		)
	private String role;
	@Positive
	private int totalMatches;
	@NotBlank
	private String teamName;
	@NotBlank
	private String country;
	
	private String description;
	
	public PlayerDTO() {
		
	}

	public PlayerDTO(int playerId, String playerName, int jerseyNum, String role, int totalMatches, String teamName,
			String country, String description) {
		super();
		this.playerId = playerId;
		this.playerName = playerName;
		this.jerseyNum = jerseyNum;
		this.role = role;
		this.totalMatches = totalMatches;
		this.teamName = teamName;
		this.country = country;
		this.description = description;
	}

	public int getPlayerId() {
		return playerId;
	}

	public void setPlayerId(int playerId) {
		this.playerId = playerId;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public int getJerseyNum() {
		return jerseyNum;
	}

	public void setJerseyNum(int jerseyNum) {
		this.jerseyNum = jerseyNum;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public int getTotalMatches() {
		return totalMatches;
	}

	public void setTotalMatches(int totalMatches) {
		this.totalMatches = totalMatches;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "PlayerDTO [playerId=" + playerId + ", playerName=" + playerName + ", jerseyNum=" + jerseyNum + ", role="
				+ role + ", totalMatches=" + totalMatches + ", teamName=" + teamName + ", country=" + country
				+ ", description=" + description + "]";
	}
	
	
	
}
