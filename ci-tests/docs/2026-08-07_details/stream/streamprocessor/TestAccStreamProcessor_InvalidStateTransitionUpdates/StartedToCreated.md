# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.01s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.02s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6449269Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-07-09T01:15:21.6449873Z     resource_test.go:346: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2026-07-09T01:15:21.6450463Z     resource_test.go:347: Creating execution project (1): test-acc-tf-p-3591226348797823934
2026-07-09T01:15:21.6450865Z     resource_test.go:347: 
2026-07-09T01:15:21.6451578Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6452930Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6454381Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6455852Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6457292Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-09T01:15:21.6458733Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:347
2026-07-09T01:15:21.6459361Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6461507Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6462717Z         	Test:       	TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-07-09T01:15:21.6464566Z         	Messages:   	Project creation failed: test-acc-tf-p-3591226348797823934, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6467552Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (1.13s)
```

- 2026-07-10 PASS 4 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7798220Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-07-11T01:30:51.7799288Z     resource_test.go:346: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2026-07-11T01:30:51.7800070Z     resource_test.go:347: Creating execution project (1): test-acc-tf-p-1461149237469444604
2026-07-11T01:30:51.7800592Z     resource_test.go:347: 
2026-07-11T01:30:51.7801527Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7803505Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7805337Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7807160Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7809443Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-11T01:30:51.7811407Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:347
2026-07-11T01:30:51.7812376Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7815300Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T01:30:51.7816912Z         	Test:       	TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-07-11T01:30:51.7819559Z         	Messages:   	Project creation failed: test-acc-tf-p-1461149237469444604, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T01:30:51.7823448Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.30s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 4 seconds
- 2026-07-14 PASS 5 seconds
- 2026-07-15 PASS 4 seconds
- 2026-07-16 PASS 5 seconds
- 2026-07-17 PASS 5 seconds
- 2026-07-18 PASS 5 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3783779Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-07-21T00:59:13.3784575Z     resource_test.go:346: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2026-07-21T00:59:13.3785479Z     resource_test.go:347: Creating execution project (1): test-acc-tf-p-4724006887201600384
2026-07-21T00:59:13.3786003Z     resource_test.go:347: 
2026-07-21T00:59:13.3786946Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3788810Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3790670Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3792681Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3794647Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-21T00:59:13.3796640Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:347
2026-07-21T00:59:13.3797484Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3800370Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3801994Z         	Test:       	TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-07-21T00:59:13.3804665Z         	Messages:   	Project creation failed: test-acc-tf-p-4724006887201600384, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3852508Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.48s)
```

- 2026-07-22 PASS 4 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6343089Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-07-23T03:35:04.6343880Z     resource_test.go:346: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2026-07-23T03:35:04.6344656Z     resource_test.go:347: Creating execution project (1): test-acc-tf-p-7545771324585300629
2026-07-23T03:35:04.6345177Z     resource_test.go:347: 
2026-07-23T03:35:04.6346126Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6348018Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6349822Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6351666Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-23T03:35:04.6353684Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:475
2026-07-23T03:35:04.6355610Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:347
2026-07-23T03:35:04.6356427Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6359558Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6361126Z         	Test:       	TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-07-23T03:35:04.6363609Z         	Messages:   	Project creation failed: test-acc-tf-p-7545771324585300629, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T03:35:04.6367476Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (1.16s)
```

- 2026-07-24 PASS 4 seconds
- 2026-07-25 PASS 3 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 4 seconds
- 2026-07-28 PASS 4 seconds
- 2026-07-29 PASS 3 seconds
- 2026-07-30 PASS 3 seconds
- 2026-07-31 PASS 3 seconds
- 2026-08-01 PASS 4 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0440552Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-08-03T01:33:30.0441329Z     resource_test.go:346: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2026-08-03T01:33:30.0452155Z    test_working_directory=/tmp/plugintest2295916343 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated test_terraform_path=/home/runner/work/_temp/15c4ca8d-89c8-44b4-a2b6-45595e5990a6/terraform
2026-08-03T01:33:30.0453419Z     resource_test.go:347: Step 1/2 error: Error running apply: exit status 1
2026-08-03T01:33:30.0453837Z         
2026-08-03T01:33:30.0454383Z         Error: error creating resource
2026-08-03T01:33:30.0454733Z         
2026-08-03T01:33:30.0455143Z           with mongodbatlas_stream_processor.processor,
2026-08-03T01:33:30.0455921Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-08-03T01:33:30.0456656Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-08-03T01:33:30.0457038Z         
2026-08-03T01:33:30.0457275Z         Post
2026-08-03T01:33:30.0458137Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/streams/test-acc-tf-s-3083674593888463384/processor":
2026-08-03T01:33:30.0458870Z         dial tcp 3.228.247.77:443: i/o timeout
2026-08-03T01:33:30.0479500Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (5.29s)
```

  - PASS 12 seconds
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
- 2026-07-12 PASS 5 seconds
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
  - PASS 4 seconds
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
