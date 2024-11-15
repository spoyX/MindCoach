package MindCoach.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import MindCoach.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
}
