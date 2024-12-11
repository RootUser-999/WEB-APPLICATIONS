import express from 'express';
import TripRequest from '../models/TripRequest.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

// Create new trip request
router.post('/', async (req, res) => {
  try {
    const request = new TripRequest(req.body);
    await request.save();
    res.status(201).json(request);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all requests (admin only)
router.get('/', authenticateAdmin, async (req, res) => {
  try {
    const requests = await TripRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update request status (admin only)
router.patch('/:id/status', authenticateAdmin, async (req, res) => {
  try {
    const request = await TripRequest.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.json(request);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;