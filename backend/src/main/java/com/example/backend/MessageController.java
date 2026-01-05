package com.example.backend;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    private final MessageRepository repository;

    public MessageController(MessageRepository repository) {
        this.repository = repository;
    }

    // 全件取得
    @GetMapping
    public List<Message> getAll() {
        return repository.findAll();
    }

    // 新規作成
    @PostMapping
    public Message create(@RequestBody Message message) {
        return repository.save(message);
    }
}