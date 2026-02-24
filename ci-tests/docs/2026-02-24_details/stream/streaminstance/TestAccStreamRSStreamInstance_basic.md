# stream/streaminstance/TestAccStreamRSStreamInstance_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 2 seconds
- 2026-01-27 PASS 2 seconds
- 2026-01-28 PASS 2 seconds
- 2026-01-29 PASS 2 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 3 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 3 seconds
- 2026-02-03
  - PASS 7 seconds
  - PASS 4 seconds
- 2026-02-04 PASS 3 seconds
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
2026-02-12T18:47:25.6902524Z === RUN   TestAccStreamRSStreamInstance_basic
2026-02-12T18:47:25.6903530Z     resource_stream_instance_test.go:16: Creating execution project (1): test-acc-tf-p-3422917763861332006
2026-02-12T18:47:25.6904438Z     resource_stream_instance_test.go:16: 
2026-02-12T18:47:25.6905931Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6908997Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6911927Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6915211Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:16
2026-02-12T18:47:25.6916589Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6921273Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6923514Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-02-12T18:47:25.6927316Z         	Messages:   	Project creation failed: test-acc-tf-p-3422917763861332006, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6929946Z --- FAIL: TestAccStreamRSStreamInstance_basic (0.24s)
```

- 2026-02-13 PASS 3 seconds
- 2026-02-14 PASS 3 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 3 seconds
- 2026-02-17 PASS 3 seconds
- 2026-02-18 PASS 2 seconds
- 2026-02-19 PASS 3 seconds
- 2026-02-20 PASS 3 seconds
- 2026-02-21 PASS 3 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 3 seconds
- 2026-02-24 PASS 3 seconds

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 2 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
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
