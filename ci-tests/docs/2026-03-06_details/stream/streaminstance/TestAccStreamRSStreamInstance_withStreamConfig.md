# stream/streaminstance/TestAccStreamRSStreamInstance_withStreamConfig Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 2 seconds
- 2026-02-06 PASS 3 seconds
- 2026-02-07
  - PASS 3 seconds
  - PASS 2 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 2 seconds
- 2026-02-10 PASS 2 seconds
- 2026-02-11 PASS 3 seconds
- 2026-02-12
  - PASS 2 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6930583Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2026-02-12T18:47:25.6948052Z     resource_stream_instance_test.go:44: Creating execution project (1): test-acc-tf-p-1164714386251387977
2026-02-12T18:47:25.6948776Z     resource_stream_instance_test.go:44: 
2026-02-12T18:47:25.6949759Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6951541Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6953316Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6955474Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:44
2026-02-12T18:47:25.6956335Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6959349Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6960796Z         	Test:       	TestAccStreamRSStreamInstance_withStreamConfig
2026-02-12T18:47:25.6963680Z         	Messages:   	Project creation failed: test-acc-tf-p-1164714386251387977, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6965298Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (0.24s)
```

- 2026-02-13 PASS 3 seconds
- 2026-02-14 PASS 2 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 2 seconds
- 2026-02-17 PASS 3 seconds
- 2026-02-18 PASS 2 seconds
- 2026-02-19 PASS 3 seconds
- 2026-02-20 PASS 3 seconds
- 2026-02-21 PASS 3 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 3 seconds
- 2026-02-24 PASS 3 seconds
- 2026-02-25
  - PASS 3 seconds
  - PASS 2 seconds
- 2026-02-26 PASS 3 seconds
- 2026-02-27
  - PASS 2 seconds
  - PASS 3 seconds
- 2026-02-28 PASS 3 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 3 seconds
- 2026-03-03 PASS 3 seconds
- 2026-03-04 PASS 2 seconds
- 2026-03-05 PASS 3 seconds
- 2026-03-06 PASS 3 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 3 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 3 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 2 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 2 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 3 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 2 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 2 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
