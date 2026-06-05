# config/projectapikey/TestAccProjectAPIKey_updateDescription Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:08](#error-2026-05-09t0108300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s
[2026-05-23 01:05](#error-2026-05-23t0105370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.07s
[2026-05-28 01:02](#error-2026-05-28t0102570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.08s
[2026-06-02 01:16](#error-2026-06-02t0116140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 15 seconds
  - PASS 18 seconds
- 2026-05-08 PASS 14 seconds
- 2026-05-09

### Error 2026-05-09T01:08:30+00:00
```
2026-05-09T01:08:30.7730773Z === RUN   TestAccProjectAPIKey_updateDescription
2026-05-09T01:08:30.7731275Z     resource_project_api_key_test.go:92: Creating execution project (1): test-acc-tf-p-3587041463357579134
2026-05-09T01:08:30.7731695Z     resource_project_api_key_test.go:92: 
2026-05-09T01:08:30.7732399Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:08:30.7733897Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:08:30.7735244Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:08:30.7736720Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:92
2026-05-09T01:08:30.7737349Z         	Error:      	Received unexpected error:
2026-05-09T01:08:30.7738798Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:08:30.7739559Z         	Test:       	TestAccProjectAPIKey_updateDescription
2026-05-09T01:08:30.7740873Z         	Messages:   	Project creation failed: test-acc-tf-p-3587041463357579134, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:08:30.7741735Z --- FAIL: TestAccProjectAPIKey_updateDescription (63.15s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 24 seconds
- 2026-05-12 PASS 19 seconds
- 2026-05-13 PASS 23 seconds
- 2026-05-14 PASS 16 seconds
- 2026-05-15 PASS 19 seconds
- 2026-05-16 PASS 16 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 22 seconds
- 2026-05-19 PASS 38 seconds
- 2026-05-20 PASS 26 seconds
- 2026-05-21 PASS 19 seconds
- 2026-05-22 PASS 23 seconds
- 2026-05-23

### Error 2026-05-23T01:05:37+00:00
```
2026-05-23T01:05:37.1769421Z === RUN   TestAccProjectAPIKey_updateDescription
2026-05-23T01:05:37.1770214Z     resource_project_api_key_test.go:92: Creating execution project (1): test-acc-tf-p-8532050647353887690
2026-05-23T01:05:37.1771029Z     resource_project_api_key_test.go:92: 
2026-05-23T01:05:37.1772199Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:05:37.1774495Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:05:37.1776806Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:05:37.1779370Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:92
2026-05-23T01:05:37.1780469Z         	Error:      	Received unexpected error:
2026-05-23T01:05:37.1783056Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:37.1784387Z         	Test:       	TestAccProjectAPIKey_updateDescription
2026-05-23T01:05:37.1786626Z         	Messages:   	Project creation failed: test-acc-tf-p-8532050647353887690, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:37.1788126Z --- FAIL: TestAccProjectAPIKey_updateDescription (63.74s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 25 seconds
- 2026-05-26 PASS 31 seconds
- 2026-05-27 PASS 23 seconds
- 2026-05-28

### Error 2026-05-28T01:02:57+00:00
```
2026-05-28T01:02:57.6370428Z === RUN   TestAccProjectAPIKey_updateDescription
2026-05-28T01:02:57.6371193Z     resource_project_api_key_test.go:92: Creating execution project (1): test-acc-tf-p-1933956267403921513
2026-05-28T01:02:57.6371748Z     resource_project_api_key_test.go:92: 
2026-05-28T01:02:57.6372670Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:57.6374452Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:02:57.6376347Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:02:57.6378333Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:92
2026-05-28T01:02:57.6379168Z         	Error:      	Received unexpected error:
2026-05-28T01:02:57.6382079Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6383473Z         	Test:       	TestAccProjectAPIKey_updateDescription
2026-05-28T01:02:57.6385804Z         	Messages:   	Project creation failed: test-acc-tf-p-1933956267403921513, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6387339Z --- FAIL: TestAccProjectAPIKey_updateDescription (1.85s)
```

- 2026-05-29 PASS 14 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 13 seconds
- 2026-06-02

### Error 2026-06-02T01:16:14+00:00
```
2026-06-02T01:16:14.0385099Z === RUN   TestAccProjectAPIKey_updateDescription
2026-06-02T01:16:14.0385627Z     resource_project_api_key_test.go:92: Creating execution project (1): test-acc-tf-p-6295893490651958753
2026-06-02T01:16:14.0386075Z     resource_project_api_key_test.go:92: 
2026-06-02T01:16:14.0386814Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:16:14.0388183Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:16:14.0389556Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:16:14.0391091Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:92
2026-06-02T01:16:14.0391903Z         	Error:      	Received unexpected error:
2026-06-02T01:16:14.0393406Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:14.0394209Z         	Test:       	TestAccProjectAPIKey_updateDescription
2026-06-02T01:16:14.0395574Z         	Messages:   	Project creation failed: test-acc-tf-p-6295893490651958753, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:14.0396664Z --- FAIL: TestAccProjectAPIKey_updateDescription (70.41s)
```

- 2026-06-03 PASS 26 seconds
- 2026-06-04 PASS 21 seconds
- 2026-06-05 PASS 22 seconds

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
- 2026-05-17 PASS 18 seconds
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
