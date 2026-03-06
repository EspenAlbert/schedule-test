# stream/streaminstance/TestMigStreamRSStreamInstance_basic Test Details
# Found 23 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 22) FAIL
Success rate: 95.65%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06 PASS 6 seconds
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS 4 seconds
- 2026-02-10: MISSING
- 2026-02-11 PASS 6 seconds
- 2026-02-12

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6873737Z === RUN   TestMigStreamRSStreamInstance_basic
2026-02-12T18:47:25.6874832Z     resource_stream_instance_migration_test.go:15: Creating execution project (1): test-acc-tf-p-5519443389785853501
2026-02-12T18:47:25.6875861Z     resource_stream_instance_migration_test.go:15: 
2026-02-12T18:47:25.6877538Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6880453Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6883382Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6886988Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_migration_test.go:15
2026-02-12T18:47:25.6888567Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6893274Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6895513Z         	Test:       	TestMigStreamRSStreamInstance_basic
2026-02-12T18:47:25.6899447Z         	Messages:   	Project creation failed: test-acc-tf-p-5519443389785853501, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6901939Z --- FAIL: TestMigStreamRSStreamInstance_basic (0.22s)
```

- 2026-02-13 PASS 6 seconds
- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16 PASS 5 seconds
- 2026-02-17: MISSING
- 2026-02-18 PASS 5 seconds
- 2026-02-19: MISSING
- 2026-02-20 PASS 6 seconds
- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23 PASS 5 seconds
- 2026-02-24: MISSING
- 2026-02-25
  - PASS 6 seconds
  - PASS 4 seconds
- 2026-02-26: MISSING
- 2026-02-27
  - PASS 4 seconds
  - PASS 7 seconds
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02 PASS 6 seconds
- 2026-03-03: MISSING
- 2026-03-04 PASS 4 seconds
- 2026-03-05: MISSING
- 2026-03-06 PASS 6 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 6 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 5 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 4 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 5 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 5 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 5 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 4 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
