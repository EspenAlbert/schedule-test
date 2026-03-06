# stream/streamconnection/TestMigStreamRSStreamConnection_cluster Test Details
# Found 23 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 22) FAIL
Success rate: 95.65%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06 PASS 14 minutes
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS 17 minutes
- 2026-02-10: MISSING
- 2026-02-11 PASS 14 minutes
- 2026-02-12

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6346697Z === RUN   TestMigStreamRSStreamConnection_cluster
2026-02-12T18:47:25.6347729Z     resource_stream_connection_migration_test.go:17: Creating execution project (1): test-acc-tf-p-5666124794136786790
2026-02-12T18:47:25.6348472Z     resource_stream_connection_migration_test.go:17: 
2026-02-12T18:47:25.6349457Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6351230Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6353001Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6356006Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-02-12T18:47:25.6359620Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:326
2026-02-12T18:47:25.6363374Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:17
2026-02-12T18:47:25.6364887Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6369639Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6371934Z         	Test:       	TestMigStreamRSStreamConnection_cluster
2026-02-12T18:47:25.6375757Z         	Messages:   	Project creation failed: test-acc-tf-p-5666124794136786790, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6378769Z --- FAIL: TestMigStreamRSStreamConnection_cluster (0.25s)
```

- 2026-02-13 PASS 15 minutes
- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16 PASS 15 minutes
- 2026-02-17: MISSING
- 2026-02-18 PASS 15 minutes
- 2026-02-19: MISSING
- 2026-02-20 PASS 17 minutes
- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23 PASS 17 minutes
- 2026-02-24: MISSING
- 2026-02-25
  - PASS 14 minutes
  - PASS 13 minutes
- 2026-02-26: MISSING
- 2026-02-27
  - PASS 13 minutes
  - PASS 30 minutes
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02 PASS 14 minutes
- 2026-03-03: MISSING
- 2026-03-04 PASS 13 minutes
- 2026-03-05: MISSING
- 2026-03-06 PASS 19 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 10 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 11 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 12 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 11 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 13 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 14 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 12 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
