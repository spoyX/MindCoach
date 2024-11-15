package mindcoach.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mindcoach.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
}
