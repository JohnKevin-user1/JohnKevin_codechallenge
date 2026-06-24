package com.hexaware.assessment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hexaware.assessment.entity.Player;
@Repository
public interface PlayerRepository extends JpaRepository<Player,Integer>{
	@Query("select p from Player p where p.role ='Batsman'")
	List<Player> getAllBatsman();
}
