# autogen_fast/logintegration/TestAccLogIntegration_basicOTel Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-05-28 01:01](#error-2026-05-28t0101180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 8 seconds
- 2026-05-08 PASS 8 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.2890375Z === RUN   TestAccLogIntegration_basicOTel
2026-05-09T01:07:49.2891424Z     resource_test.go:232: Creating execution project (1): test-acc-tf-p-623452522765143401
2026-05-09T01:07:49.2892391Z     resource_test.go:232: 
2026-05-09T01:07:49.2894200Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.2897997Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.2901609Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.2905376Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:232
2026-05-09T01:07:49.2907025Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.2911076Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2913079Z         	Test:       	TestAccLogIntegration_basicOTel
2026-05-09T01:07:49.2916496Z         	Messages:   	Project creation failed: test-acc-tf-p-623452522765143401, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2918834Z --- FAIL: TestAccLogIntegration_basicOTel (64.09s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 8 seconds
- 2026-05-13 PASS 7 seconds
- 2026-05-14 PASS 7 seconds
- 2026-05-15 PASS 8 seconds
- 2026-05-16 PASS 10 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 7 seconds
- 2026-05-19 PASS 6 seconds
- 2026-05-20 PASS 7 seconds
- 2026-05-21 PASS 7 seconds
- 2026-05-22 PASS 8 seconds
- 2026-05-23 PASS 7 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 8 seconds
- 2026-05-26 PASS 8 seconds
- 2026-05-27 PASS 8 seconds
- 2026-05-28

### Error 2026-05-28T01:01:18+00:00
```
2026-05-28T01:01:18.6985777Z === RUN   TestAccLogIntegration_basicOTel
2026-05-28T01:01:18.6986333Z     resource_test.go:232: Creating execution project (1): test-acc-tf-p-5959099151219409925
2026-05-28T01:01:18.6986823Z     resource_test.go:232: 
2026-05-28T01:01:18.6987694Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:18.6989321Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:18.6991025Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:18.6992739Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:232
2026-05-28T01:01:18.6993513Z         	Error:      	Received unexpected error:
2026-05-28T01:01:18.6996033Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:18.6997311Z         	Test:       	TestAccLogIntegration_basicOTel
2026-05-28T01:01:18.6999480Z         	Messages:   	Project creation failed: test-acc-tf-p-5959099151219409925, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:18.7000951Z --- FAIL: TestAccLogIntegration_basicOTel (0.80s)
```

- 2026-05-29 PASS 8 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 7 seconds
- 2026-06-02 PASS 6 seconds
- 2026-06-03 PASS 9 seconds
- 2026-06-04 PASS 8 seconds
- 2026-06-05 PASS 8 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 7 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 9 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 8 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 8 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
