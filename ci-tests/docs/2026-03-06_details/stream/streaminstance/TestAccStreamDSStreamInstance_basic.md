# stream/streaminstance/TestAccStreamDSStreamInstance_basic Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 5 seconds
- 2026-02-06 PASS 6 seconds
- 2026-02-07
  - PASS 12 seconds
  - PASS 5 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 5 seconds
- 2026-02-10 PASS 5 seconds
- 2026-02-11 PASS 6 seconds
- 2026-02-12
  - PASS 5 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6788145Z === RUN   TestAccStreamDSStreamInstance_basic
2026-02-12T18:47:25.6789185Z     data_source_stream_instance_test.go:14: Creating execution project (1): test-acc-tf-p-6922091096321991961
2026-02-12T18:47:25.6790118Z     data_source_stream_instance_test.go:14: 
2026-02-12T18:47:25.6791634Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6794543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6797615Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6800982Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instance_test.go:14
2026-02-12T18:47:25.6802389Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6806928Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6809338Z         	Test:       	TestAccStreamDSStreamInstance_basic
2026-02-12T18:47:25.6813115Z         	Messages:   	Project creation failed: test-acc-tf-p-6922091096321991961, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6815614Z --- FAIL: TestAccStreamDSStreamInstance_basic (0.40s)
```

- 2026-02-13 PASS 6 seconds
- 2026-02-14 PASS 5 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 5 seconds
- 2026-02-17 PASS 7 seconds
- 2026-02-18 PASS 7 seconds
- 2026-02-19 PASS 6 seconds
- 2026-02-20 PASS 6 seconds
- 2026-02-21 PASS 6 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 6 seconds
- 2026-02-24 PASS 6 seconds
- 2026-02-25
  - PASS 8 seconds
  - PASS 5 seconds
- 2026-02-26 PASS 6 seconds
- 2026-02-27
  - PASS 6 seconds
  - PASS 7 seconds
- 2026-02-28 PASS 6 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 8 seconds
- 2026-03-03 PASS a minute
- 2026-03-04 PASS 5 seconds
- 2026-03-05 PASS a minute
- 2026-03-06 PASS 7 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 7 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 6 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 5 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 5 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 6 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 4 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 5 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
