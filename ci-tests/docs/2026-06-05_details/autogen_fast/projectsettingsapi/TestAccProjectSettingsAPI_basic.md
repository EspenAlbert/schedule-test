# autogen_fast/projectsettingsapi/TestAccProjectSettingsAPI_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 7)
Success rate: 76.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s
[2026-05-16 01:00](#error-2026-05-16t0100500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.05s
[2026-05-19 01:09](#error-2026-05-19t0109410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 102.02s
[2026-05-21 01:10](#error-2026-05-21t0110440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.08s
[2026-05-28 01:01](#error-2026-05-28t0101530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-05-30 01:11](#error-2026-05-30t0111190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s
[2026-06-02 01:16](#error-2026-06-02t0116400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 8 seconds
- 2026-05-08 PASS 8 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.3273538Z === RUN   TestAccProjectSettingsAPI_basic
2026-05-09T01:07:49.3274137Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-3432715238884973270
2026-05-09T01:07:49.3274659Z     resource_test.go:18: 
2026-05-09T01:07:49.3275630Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.3277741Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.3279681Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.3281702Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectsettingsapi/resource_test.go:18
2026-05-09T01:07:49.3282577Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.3284602Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3285687Z         	Test:       	TestAccProjectSettingsAPI_basic
2026-05-09T01:07:49.3287732Z         	Messages:   	Project creation failed: test-acc-tf-p-3432715238884973270, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3289121Z --- FAIL: TestAccProjectSettingsAPI_basic (63.54s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 9 seconds
- 2026-05-13 PASS 8 seconds
- 2026-05-14 PASS 9 seconds
- 2026-05-15 PASS 9 seconds
- 2026-05-16

### Error 2026-05-16T01:00:50+00:00
```
2026-05-16T01:00:50.9988996Z === RUN   TestAccProjectSettingsAPI_basic
2026-05-16T01:00:50.9990048Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-1570306523797266172
2026-05-16T01:00:50.9990972Z     resource_test.go:18: 
2026-05-16T01:00:50.9992657Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:00:50.9996112Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:00:50.9999375Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:00:51.0002798Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectsettingsapi/resource_test.go:18
2026-05-16T01:00:51.0004449Z         	Error:      	Received unexpected error:
2026-05-16T01:00:51.0007877Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:51.0009694Z         	Test:       	TestAccProjectSettingsAPI_basic
2026-05-16T01:00:51.0012785Z         	Messages:   	Project creation failed: test-acc-tf-p-1570306523797266172, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:51.0015011Z --- FAIL: TestAccProjectSettingsAPI_basic (79.50s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 7 seconds
- 2026-05-19

### Error 2026-05-19T01:09:41+00:00
```
2026-05-19T01:09:41.8717203Z === RUN   TestAccProjectSettingsAPI_basic
2026-05-19T01:09:41.8718252Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-8067224925587476297
2026-05-19T01:09:41.8719162Z     resource_test.go:18: 
2026-05-19T01:09:41.8720871Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:09:41.8724330Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:09:41.8727747Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:09:41.8731426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectsettingsapi/resource_test.go:18
2026-05-19T01:09:41.8733032Z         	Error:      	Received unexpected error:
2026-05-19T01:09:41.8736869Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:09:41.8738716Z         	Test:       	TestAccProjectSettingsAPI_basic
2026-05-19T01:09:41.8742088Z         	Messages:   	Project creation failed: test-acc-tf-p-8067224925587476297, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:09:41.8744503Z --- FAIL: TestAccProjectSettingsAPI_basic (102.24s)
```

- 2026-05-20 PASS 7 seconds
- 2026-05-21

### Error 2026-05-21T01:10:44+00:00
```
2026-05-21T01:10:44.0036412Z === RUN   TestAccProjectSettingsAPI_basic
2026-05-21T01:10:44.0037494Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-8442971419534016736
2026-05-21T01:10:44.0038677Z     resource_test.go:18: 
2026-05-21T01:10:44.0040424Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:10:44.0044052Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:10:44.0047799Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:10:44.0051554Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectsettingsapi/resource_test.go:18
2026-05-21T01:10:44.0053139Z         	Error:      	Received unexpected error:
2026-05-21T01:10:44.0056857Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:10:44.0058968Z         	Test:       	TestAccProjectSettingsAPI_basic
2026-05-21T01:10:44.0062305Z         	Messages:   	Project creation failed: test-acc-tf-p-8442971419534016736, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:10:44.0064496Z --- FAIL: TestAccProjectSettingsAPI_basic (71.81s)
```

- 2026-05-22 PASS 9 seconds
- 2026-05-23 PASS 17 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 8 seconds
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 8 seconds
- 2026-05-28

### Error 2026-05-28T01:01:53+00:00
```
2026-05-28T01:01:53.8870630Z === RUN   TestAccProjectSettingsAPI_basic
2026-05-28T01:01:53.8871226Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-4037987120586421731
2026-05-28T01:01:53.8871713Z     resource_test.go:18: 
2026-05-28T01:01:53.8872568Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:53.8874179Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:53.8875794Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:53.8877536Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectsettingsapi/resource_test.go:18
2026-05-28T01:01:53.8878312Z         	Error:      	Received unexpected error:
2026-05-28T01:01:53.8880858Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:53.8882154Z         	Test:       	TestAccProjectSettingsAPI_basic
2026-05-28T01:01:53.8884262Z         	Messages:   	Project creation failed: test-acc-tf-p-4037987120586421731, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:53.8885863Z --- FAIL: TestAccProjectSettingsAPI_basic (0.88s)
```

- 2026-05-29 PASS 8 seconds
- 2026-05-30

### Error 2026-05-30T01:11:19+00:00
```
2026-05-30T01:11:19.0418265Z === RUN   TestAccProjectSettingsAPI_basic
2026-05-30T01:11:19.0418922Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-3914634739570160173
2026-05-30T01:11:19.0419711Z     resource_test.go:18: 
2026-05-30T01:11:19.0420728Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:11:19.0422606Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:11:19.0424790Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:11:19.0426811Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectsettingsapi/resource_test.go:18
2026-05-30T01:11:19.0427857Z         	Error:      	Received unexpected error:
2026-05-30T01:11:19.0430203Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:11:19.0431541Z         	Test:       	TestAccProjectSettingsAPI_basic
2026-05-30T01:11:19.0433799Z         	Messages:   	Project creation failed: test-acc-tf-p-3914634739570160173, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:11:19.0435086Z --- FAIL: TestAccProjectSettingsAPI_basic (63.52s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 7 seconds
- 2026-06-02

### Error 2026-06-02T01:16:40+00:00
```
2026-06-02T01:16:40.1247607Z === RUN   TestAccProjectSettingsAPI_basic
2026-06-02T01:16:40.1248259Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-2725975826290847764
2026-06-02T01:16:40.1248818Z     resource_test.go:18: 
2026-06-02T01:16:40.1249796Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:16:40.1251635Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:16:40.1253463Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:16:40.1255612Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/projectsettingsapi/resource_test.go:18
2026-06-02T01:16:40.1256539Z         	Error:      	Received unexpected error:
2026-06-02T01:16:40.1258532Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:40.1259632Z         	Test:       	TestAccProjectSettingsAPI_basic
2026-06-02T01:16:40.1261427Z         	Messages:   	Project creation failed: test-acc-tf-p-2725975826290847764, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:40.1262646Z --- FAIL: TestAccProjectSettingsAPI_basic (74.57s)
```

- 2026-06-03 PASS 8 seconds
- 2026-06-04 PASS 9 seconds
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
- 2026-05-17 PASS 8 seconds
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
