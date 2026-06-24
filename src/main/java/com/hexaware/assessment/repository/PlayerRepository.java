package com.hexaware.assessment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.assessment.entity.Player;
@Repository
public interface PlayerRepository extends JpaRepository<Player,Integer>{
	List<Player> findByRole(String role);
}
