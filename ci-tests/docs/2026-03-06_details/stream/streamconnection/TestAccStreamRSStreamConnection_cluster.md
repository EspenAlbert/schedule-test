# stream/streamconnection/TestAccStreamRSStreamConnection_cluster Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 14 minutes
- 2026-02-06 PASS 7 seconds
- 2026-02-07
  - PASS 13 minutes
  - PASS 14 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 6 seconds
- 2026-02-10 PASS 14 minutes
- 2026-02-11 PASS 8 seconds
- 2026-02-12
  - PASS 13 minutes
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6515023Z === RUN   TestAccStreamRSStreamConnection_cluster
2026-02-12T18:47:25.6516078Z     resource_stream_connection_test.go:290: Creating execution project (1): test-acc-tf-p-1899835061755458986
2026-02-12T18:47:25.6517022Z     resource_stream_connection_test.go:290: 
2026-02-12T18:47:25.6518681Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6521590Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6524527Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6527591Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-02-12T18:47:25.6530953Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:297
2026-02-12T18:47:25.6534494Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:290
2026-02-12T18:47:25.6535900Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6540600Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6542889Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2026-02-12T18:47:25.6546717Z         	Messages:   	Project creation failed: test-acc-tf-p-1899835061755458986, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6549755Z --- FAIL: TestAccStreamRSStreamConnection_cluster (0.24s)
```

- 2026-02-13 PASS 7 seconds
- 2026-02-14 PASS 18 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 7 seconds
- 2026-02-17 PASS 14 minutes
- 2026-02-18 PASS 6 seconds
- 2026-02-19 PASS 20 minutes
- 2026-02-20 PASS 8 seconds
- 2026-02-21 PASS 18 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 8 seconds
- 2026-02-24 PASS 14 minutes
- 2026-02-25
  - PASS 8 seconds
  - PASS 7 seconds
- 2026-02-26 PASS 24 minutes
- 2026-02-27
  - PASS 8 seconds
  - PASS 10 seconds
- 2026-02-28 PASS 15 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 8 seconds
- 2026-03-03 PASS 17 minutes
- 2026-03-04 PASS 7 seconds
- 2026-03-05 PASS 24 minutes
- 2026-03-06 PASS 8 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 8 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 7 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 7 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 7 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 7 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 6 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 6 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
