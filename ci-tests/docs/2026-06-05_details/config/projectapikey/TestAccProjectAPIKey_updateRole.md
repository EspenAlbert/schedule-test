# config/projectapikey/TestAccProjectAPIKey_updateRole Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:08](#error-2026-05-09t0108300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 111.06s
[2026-05-28 01:02](#error-2026-05-28t0102570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 16 seconds
  - PASS 19 seconds
- 2026-05-08 PASS 14 seconds
- 2026-05-09

### Error 2026-05-09T01:08:30+00:00
```
2026-05-09T01:08:30.7742030Z === RUN   TestAccProjectAPIKey_updateRole
2026-05-09T01:08:30.7742505Z     resource_project_api_key_test.go:116: Creating execution project (1): test-acc-tf-p-3726968300220306537
2026-05-09T01:08:30.7742931Z     resource_project_api_key_test.go:116: 
2026-05-09T01:08:30.7743909Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:08:30.7745242Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:08:30.7746566Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:08:30.7748046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:116
2026-05-09T01:08:30.7748707Z         	Error:      	Received unexpected error:
2026-05-09T01:08:30.7750153Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:08:30.7750906Z         	Test:       	TestAccProjectAPIKey_updateRole
2026-05-09T01:08:30.7752225Z         	Messages:   	Project creation failed: test-acc-tf-p-3726968300220306537, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:08:30.7753147Z --- FAIL: TestAccProjectAPIKey_updateRole (111.59s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 23 seconds
- 2026-05-12 PASS 20 seconds
- 2026-05-13 PASS 23 seconds
- 2026-05-14 PASS 16 seconds
- 2026-05-15 PASS 20 seconds
- 2026-05-16 PASS 16 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 23 seconds
- 2026-05-19 PASS 17 seconds
- 2026-05-20 PASS 28 seconds
- 2026-05-21 PASS 20 seconds
- 2026-05-22 PASS 23 seconds
- 2026-05-23 PASS 29 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 25 seconds
- 2026-05-26 PASS 15 seconds
- 2026-05-27 PASS 23 seconds
- 2026-05-28

### Error 2026-05-28T01:02:57+00:00
```
2026-05-28T01:02:57.6387711Z === RUN   TestAccProjectAPIKey_updateRole
2026-05-28T01:02:57.6388333Z     resource_project_api_key_test.go:116: Creating execution project (1): test-acc-tf-p-6348881753825374389
2026-05-28T01:02:57.6388897Z     resource_project_api_key_test.go:116: 
2026-05-28T01:02:57.6389829Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:57.6391720Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:02:57.6393509Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:02:57.6395499Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:116
2026-05-28T01:02:57.6396346Z         	Error:      	Received unexpected error:
2026-05-28T01:02:57.6399130Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6400621Z         	Test:       	TestAccProjectAPIKey_updateRole
2026-05-28T01:02:57.6403046Z         	Messages:   	Project creation failed: test-acc-tf-p-6348881753825374389, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6404560Z --- FAIL: TestAccProjectAPIKey_updateRole (0.88s)
```

- 2026-05-29 PASS 14 seconds
- 2026-05-30 PASS 24 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 13 seconds
- 2026-06-02 PASS 37 seconds
- 2026-06-03 PASS 26 seconds
- 2026-06-04 PASS 21 seconds
- 2026-06-05 PASS 23 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 20 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 17 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 22 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 16 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
