# config/projectapikey/TestAccProjectAPIKey_duplicateProject Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:08](#error-2026-05-09t0108300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.04s
[2026-05-28 01:02](#error-2026-05-28t0102570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS a second
  - PASS a second
- 2026-05-08 PASS a second
- 2026-05-09

### Error 2026-05-09T01:08:30+00:00
```
2026-05-09T01:08:30.7753594Z === RUN   TestAccProjectAPIKey_duplicateProject
2026-05-09T01:08:30.7754279Z     resource_project_api_key_test.go:139: Creating execution project (1): test-acc-tf-p-7272349040552382408
2026-05-09T01:08:30.7754712Z     resource_project_api_key_test.go:139: 
2026-05-09T01:08:30.7755417Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:08:30.7756768Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:08:30.7758100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:08:30.7759575Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:139
2026-05-09T01:08:30.7760205Z         	Error:      	Received unexpected error:
2026-05-09T01:08:30.7761643Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:08:30.7762413Z         	Test:       	TestAccProjectAPIKey_duplicateProject
2026-05-09T01:08:30.7763916Z         	Messages:   	Project creation failed: test-acc-tf-p-7272349040552382408, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:08:30.7764825Z --- FAIL: TestAccProjectAPIKey_duplicateProject (92.38s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS a second
- 2026-05-12 PASS a second
- 2026-05-13 PASS a second
- 2026-05-14 PASS a second
- 2026-05-15 PASS a second
- 2026-05-16 PASS a second
- 2026-05-17: MISSING
- 2026-05-18 PASS a second
- 2026-05-19 PASS a moment
- 2026-05-20 PASS a second
- 2026-05-21 PASS a second
- 2026-05-22 PASS a second
- 2026-05-23 PASS a moment
- 2026-05-24: MISSING
- 2026-05-25 PASS a second
- 2026-05-26 PASS a moment
- 2026-05-27 PASS a second
- 2026-05-28

### Error 2026-05-28T01:02:57+00:00
```
2026-05-28T01:02:57.6404920Z === RUN   TestAccProjectAPIKey_duplicateProject
2026-05-28T01:02:57.6405561Z     resource_project_api_key_test.go:139: Creating execution project (1): test-acc-tf-p-8455796598313158971
2026-05-28T01:02:57.6406125Z     resource_project_api_key_test.go:139: 
2026-05-28T01:02:57.6407062Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:57.6408836Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:02:57.6410732Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:02:57.6412852Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:139
2026-05-28T01:02:57.6413690Z         	Error:      	Received unexpected error:
2026-05-28T01:02:57.6416758Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6418161Z         	Test:       	TestAccProjectAPIKey_duplicateProject
2026-05-28T01:02:57.6420494Z         	Messages:   	Project creation failed: test-acc-tf-p-8455796598313158971, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6422156Z --- FAIL: TestAccProjectAPIKey_duplicateProject (0.87s)
```

- 2026-05-29 PASS a second
- 2026-05-30 PASS a moment
- 2026-05-31: MISSING
- 2026-06-01 PASS a second
- 2026-06-02 PASS a moment
- 2026-06-03 PASS a second
- 2026-06-04 PASS a second
- 2026-06-05 PASS a second

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a second
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a second
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a second
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a second
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
