# config/projectapikey/TestAccProjectAPIKey_changingSingleProject Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 7)
Success rate: 77.42%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:08](#error-2026-05-09t0108300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 96.08s
[2026-05-19 01:08](#error-2026-05-19t0108270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 114.10s
[2026-05-23 01:05](#error-2026-05-23t0105370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.09s
[2026-05-26 02:14](#error-2026-05-26t0214460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.03s
[2026-05-28 01:02](#error-2026-05-28t0102570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.10s
[2026-05-30 01:08](#error-2026-05-30t0108510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.09s
[2026-06-02 01:16](#error-2026-06-02t0116140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 120.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 36 seconds
  - PASS 47 seconds
- 2026-05-08 PASS 30 seconds
- 2026-05-09

### Error 2026-05-09T01:08:30+00:00
```
2026-05-09T01:08:30.7719297Z === RUN   TestAccProjectAPIKey_changingSingleProject
2026-05-09T01:08:30.7719808Z     resource_project_api_key_test.go:60: Creating execution project (1): test-acc-tf-p-239244395064126318
2026-05-09T01:08:30.7720232Z     resource_project_api_key_test.go:60: 
2026-05-09T01:08:30.7720930Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:08:30.7722275Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:08:30.7723748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:08:30.7725257Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:60
2026-05-09T01:08:30.7725909Z         	Error:      	Received unexpected error:
2026-05-09T01:08:30.7727361Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:08:30.7728142Z         	Test:       	TestAccProjectAPIKey_changingSingleProject
2026-05-09T01:08:30.7729587Z         	Messages:   	Project creation failed: test-acc-tf-p-239244395064126318, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:08:30.7730461Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (96.82s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 50 seconds
- 2026-05-12 PASS 43 seconds
- 2026-05-13 PASS 47 seconds
- 2026-05-14 PASS 37 seconds
- 2026-05-15 PASS 40 seconds
- 2026-05-16 PASS 38 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 46 seconds
- 2026-05-19

### Error 2026-05-19T01:08:27+00:00
```
2026-05-19T01:08:27.1599795Z === RUN   TestAccProjectAPIKey_changingSingleProject
2026-05-19T01:08:27.1600951Z     resource_project_api_key_test.go:60: Creating execution project (1): test-acc-tf-p-3963157973333793489
2026-05-19T01:08:27.1601933Z     resource_project_api_key_test.go:60: 
2026-05-19T01:08:27.1603602Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:27.1607129Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:27.1610912Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:27.1614848Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:60
2026-05-19T01:08:27.1616377Z         	Error:      	Received unexpected error:
2026-05-19T01:08:27.1619965Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:27.1621856Z         	Test:       	TestAccProjectAPIKey_changingSingleProject
2026-05-19T01:08:27.1625255Z         	Messages:   	Project creation failed: test-acc-tf-p-3963157973333793489, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:27.1627263Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (114.97s)
```

- 2026-05-20 PASS 58 seconds
- 2026-05-21 PASS 56 seconds
- 2026-05-22 PASS 48 seconds
- 2026-05-23

### Error 2026-05-23T01:05:37+00:00
```
2026-05-23T01:05:37.1749809Z === RUN   TestAccProjectAPIKey_changingSingleProject
2026-05-23T01:05:37.1750744Z     resource_project_api_key_test.go:60: Creating execution project (1): test-acc-tf-p-8744209915530091629
2026-05-23T01:05:37.1751440Z     resource_project_api_key_test.go:60: 
2026-05-23T01:05:37.1752646Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:05:37.1754962Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:05:37.1757292Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:05:37.1760050Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:60
2026-05-23T01:05:37.1761285Z         	Error:      	Received unexpected error:
2026-05-23T01:05:37.1763833Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:37.1765160Z         	Test:       	TestAccProjectAPIKey_changingSingleProject
2026-05-23T01:05:37.1767421Z         	Messages:   	Project creation failed: test-acc-tf-p-8744209915530091629, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:37.1768920Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (85.90s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 53 seconds
- 2026-05-26

### Error 2026-05-26T02:14:46+00:00
```
2026-05-26T02:14:46.0437563Z === RUN   TestAccProjectAPIKey_changingSingleProject
2026-05-26T02:14:46.0438220Z     resource_project_api_key_test.go:60: Creating execution project (1): test-acc-tf-p-1157666375870381393
2026-05-26T02:14:46.0438777Z     resource_project_api_key_test.go:60: 
2026-05-26T02:14:46.0439710Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:14:46.0441476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:14:46.0443407Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:14:46.0445393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:60
2026-05-26T02:14:46.0446236Z         	Error:      	Received unexpected error:
2026-05-26T02:14:46.0448129Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:46.0449188Z         	Test:       	TestAccProjectAPIKey_changingSingleProject
2026-05-26T02:14:46.0450936Z         	Messages:   	Project creation failed: test-acc-tf-p-1157666375870381393, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:46.0452138Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (74.27s)
```

- 2026-05-27 PASS 49 seconds
- 2026-05-28

### Error 2026-05-28T01:02:57+00:00
```
2026-05-28T01:02:57.6353199Z === RUN   TestAccProjectAPIKey_changingSingleProject
2026-05-28T01:02:57.6353845Z     resource_project_api_key_test.go:60: Creating execution project (1): test-acc-tf-p-8041951334830627540
2026-05-28T01:02:57.6354398Z     resource_project_api_key_test.go:60: 
2026-05-28T01:02:57.6355327Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:57.6357113Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:02:57.6358901Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:02:57.6360983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:60
2026-05-28T01:02:57.6361834Z         	Error:      	Received unexpected error:
2026-05-28T01:02:57.6364607Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6366134Z         	Test:       	TestAccProjectAPIKey_changingSingleProject
2026-05-28T01:02:57.6368477Z         	Messages:   	Project creation failed: test-acc-tf-p-8041951334830627540, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6370027Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (0.95s)
```

- 2026-05-29 PASS 31 seconds
- 2026-05-30

### Error 2026-05-30T01:08:51+00:00
```
2026-05-30T01:08:51.9423079Z === RUN   TestAccProjectAPIKey_changingSingleProject
2026-05-30T01:08:51.9423796Z     resource_project_api_key_test.go:60: Creating execution project (1): test-acc-tf-p-3585908942726700187
2026-05-30T01:08:51.9424436Z     resource_project_api_key_test.go:60: 
2026-05-30T01:08:51.9425400Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:51.9427183Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:51.9429254Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:51.9431454Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:60
2026-05-30T01:08:51.9432339Z         	Error:      	Received unexpected error:
2026-05-30T01:08:51.9434301Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:51.9435361Z         	Test:       	TestAccProjectAPIKey_changingSingleProject
2026-05-30T01:08:51.9437109Z         	Messages:   	Project creation failed: test-acc-tf-p-3585908942726700187, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:51.9438929Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (107.87s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 32 seconds
- 2026-06-02

### Error 2026-06-02T01:16:14+00:00
```
2026-06-02T01:16:14.0372775Z === RUN   TestAccProjectAPIKey_changingSingleProject
2026-06-02T01:16:14.0373317Z     resource_project_api_key_test.go:60: Creating execution project (1): test-acc-tf-p-1953126218127975173
2026-06-02T01:16:14.0373783Z     resource_project_api_key_test.go:60: 
2026-06-02T01:16:14.0374525Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:16:14.0375909Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:16:14.0377443Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:16:14.0379136Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:60
2026-06-02T01:16:14.0379942Z         	Error:      	Received unexpected error:
2026-06-02T01:16:14.0381626Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:14.0382460Z         	Test:       	TestAccProjectAPIKey_changingSingleProject
2026-06-02T01:16:14.0383831Z         	Messages:   	Project creation failed: test-acc-tf-p-1953126218127975173, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:14.0384757Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (120.77s)
```

- 2026-06-03 PASS 59 seconds
- 2026-06-04 PASS 50 seconds
- 2026-06-05 PASS 46 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 45 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 40 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 47 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 36 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
