# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.00s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.06s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.01s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6264477Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-07-09T01:15:21.6265106Z     resource_test.go:275: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-07-09T01:15:21.6265814Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-783747920823457472
2026-07-09T01:15:21.6266211Z     resource_test.go:276: 
2026-07-09T01:15:21.6266925Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6268273Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6269688Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6271080Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6272520Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-09T01:15:21.6274114Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-09T01:15:21.6274751Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6276359Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6277275Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-07-09T01:15:21.6278691Z         	Messages:   	Project creation failed: test-acc-tf-p-783747920823457472, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6356340Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (63.11s)
```

- 2026-07-10 PASS 4 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7564565Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-07-11T01:30:51.7565393Z     resource_test.go:275: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-07-11T01:30:51.7566213Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-3620749735318937344
2026-07-11T01:30:51.7566733Z     resource_test.go:276: 
2026-07-11T01:30:51.7567669Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7569725Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7571551Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7573370Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7575271Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-11T01:30:51.7577219Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-11T01:30:51.7578042Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7580417Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7581634Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-07-11T01:30:51.7583510Z         	Messages:   	Project creation failed: test-acc-tf-p-3620749735318937344, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7677725Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (62.00s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 4 seconds
- 2026-07-14 PASS 5 seconds
- 2026-07-15 PASS 4 seconds
- 2026-07-16 PASS 5 seconds
- 2026-07-17 PASS 4 seconds
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0559469Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-07-18T01:45:13.0561055Z     resource_test.go:275: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-07-18T01:45:13.0562608Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-4818698353199713134
2026-07-18T01:45:13.0563495Z     resource_test.go:276: 
2026-07-18T01:45:13.0565338Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0568768Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0572293Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0575992Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-18T01:45:13.0579675Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-18T01:45:13.0583432Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-18T01:45:13.0585182Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0588705Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0590941Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-07-18T01:45:13.0594604Z         	Messages:   	Project creation failed: test-acc-tf-p-4818698353199713134, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0649523Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (89.64s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3634747Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-07-21T00:59:13.3635766Z     resource_test.go:275: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-07-21T00:59:13.3636750Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-8541738518505096488
2026-07-21T00:59:13.3637275Z     resource_test.go:276: 
2026-07-21T00:59:13.3638546Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3640741Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3642998Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3645155Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3647419Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-21T00:59:13.3649724Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-21T00:59:13.3650579Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3654075Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3655989Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-07-21T00:59:13.3658819Z         	Messages:   	Project creation failed: test-acc-tf-p-8541738518505096488, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3709087Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (0.77s)
```

- 2026-07-22 PASS 4 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6201977Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-07-23T03:35:04.6202983Z     resource_test.go:275: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-07-23T03:35:04.6203809Z     resource_test.go:276: Creating execution project (1): test-acc-tf-p-476251693335188393
2026-07-23T03:35:04.6204326Z     resource_test.go:276: 
2026-07-23T03:35:04.6205267Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6207056Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6208996Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6210776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-23T03:35:04.6212658Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-23T03:35:04.6214683Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:276
2026-07-23T03:35:04.6215518Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6218541Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6220045Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-07-23T03:35:04.6222428Z         	Messages:   	Project creation failed: test-acc-tf-p-476251693335188393, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6228338Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (1.09s)
```

- 2026-07-24 PASS 4 seconds
- 2026-07-25 PASS 3 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 4 seconds
- 2026-07-28 PASS 4 seconds
- 2026-07-29 PASS 3 seconds
- 2026-07-30 PASS 3 seconds
- 2026-07-31 PASS 3 seconds
- 2026-08-01 PASS 3 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0245361Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-08-03T01:33:30.0246382Z     resource_test.go:275: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-08-03T01:33:30.0257706Z    test_terraform_path=/home/runner/work/_temp/15c4ca8d-89c8-44b4-a2b6-45595e5990a6/terraform test_working_directory=/tmp/plugintest3195002178
2026-08-03T01:33:30.0258561Z     resource_test.go:276: Step 1/2 error: Error running apply: exit status 1
2026-08-03T01:33:30.0259000Z         
2026-08-03T01:33:30.0259303Z         Error: error creating resource
2026-08-03T01:33:30.0259607Z         
2026-08-03T01:33:30.0260008Z           with mongodbatlas_stream_processor.processor,
2026-08-03T01:33:30.0260772Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-08-03T01:33:30.0261493Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-08-03T01:33:30.0261882Z         
2026-08-03T01:33:30.0262118Z         Post
2026-08-03T01:33:30.0262935Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/streams/test-acc-tf-s-3083674593888463384/processor":
2026-08-03T01:33:30.0263667Z         dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0357143Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (5.30s)
```

  - PASS 4 seconds
  - PASS 4 seconds
- 2026-08-04 PASS 4 seconds
- 2026-08-05 PASS 5 seconds
- 2026-08-06 PASS 4 seconds
- 2026-08-07 PASS 5 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 4 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 4 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 5 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 5 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 seconds
  - PASS 4 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 4 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
