# stream/streamworkspace/TestAccStreamWorkspace_moveInstance Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 01:13](#error-2026-04-11t0113160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s
[2026-04-14 01:20](#error-2026-04-14t0120230000) |  | dev | flaky_500 | 47.00s
[2026-04-16 00:56](#error-2026-04-16t0056520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-05-05 02:16](#error-2026-05-05t0216140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 4 seconds
- 2026-04-08 PASS 3 seconds
- 2026-04-09 PASS a minute
- 2026-04-10 PASS 4 seconds
- 2026-04-11

### Error 2026-04-11T01:13:16+00:00
```
2026-04-11T01:13:16.0109400Z === RUN   TestAccStreamWorkspace_moveInstance
2026-04-11T01:13:16.0110406Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-1499056805432717536
2026-04-11T01:13:16.0111244Z     move_state_test.go:15: 
2026-04-11T01:13:16.0112851Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T01:13:16.0116131Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T01:13:16.0119634Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T01:13:16.0123100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-04-11T01:13:16.0124546Z         	Error:      	Received unexpected error:
2026-04-11T01:13:16.0128061Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:16.0130107Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-04-11T01:13:16.0133429Z         	Messages:   	Project creation failed: test-acc-tf-p-1499056805432717536, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:16.0135515Z --- FAIL: TestAccStreamWorkspace_moveInstance (63.51s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 5 seconds
- 2026-04-14

### Error 2026-04-14T01:20:23+00:00
```
2026-04-14T01:20:23.8279247Z === RUN   TestAccStreamWorkspace_moveInstance
2026-04-14T01:20:23.8279991Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-6036380972681752557
2026-04-14T01:20:23.8280514Z     move_state_test.go:15: 
2026-04-14T01:20:23.8281465Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-14T01:20:23.8283343Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-14T01:20:23.8285207Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-14T01:20:23.8287367Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-04-14T01:20:23.8288208Z         	Error:      	Received unexpected error:
2026-04-14T01:20:23.8289172Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-04-14T01:20:23.8289820Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-04-14T01:20:23.8290946Z         	Messages:   	Project creation failed: test-acc-tf-p-6036380972681752557, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-04-14T01:20:23.8291741Z --- FAIL: TestAccStreamWorkspace_moveInstance (47.02s)
```

- 2026-04-15 PASS 3 seconds
- 2026-04-16

### Error 2026-04-16T00:56:52+00:00
```
2026-04-16T00:56:52.0345628Z === RUN   TestAccStreamWorkspace_moveInstance
2026-04-16T00:56:52.0346074Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-7922195074949251573
2026-04-16T00:56:52.0346457Z     move_state_test.go:15: 
2026-04-16T00:56:52.0347160Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:56:52.0348707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T00:56:52.0350066Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T00:56:52.0351499Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-04-16T00:56:52.0352122Z         	Error:      	Received unexpected error:
2026-04-16T00:56:52.0353603Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:56:52.0354491Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-04-16T00:56:52.0355818Z         	Messages:   	Project creation failed: test-acc-tf-p-7922195074949251573, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:56:52.0356696Z --- FAIL: TestAccStreamWorkspace_moveInstance (64.06s)
```

- 2026-04-17 PASS 3 seconds
- 2026-04-18 PASS 4 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 4 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 3 seconds
- 2026-04-23 PASS 9 seconds
- 2026-04-24 PASS 4 seconds
- 2026-04-25 PASS 11 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 seconds
- 2026-04-28 PASS 20 seconds
- 2026-04-29 PASS 4 seconds
- 2026-04-30
  - PASS a minute
  - PASS 5 seconds
- 2026-05-01 PASS 3 seconds
- 2026-05-02 PASS 17 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 5 seconds
- 2026-05-05

### Error 2026-05-05T02:16:14+00:00
```
2026-05-05T02:16:14.7888240Z === RUN   TestAccStreamWorkspace_moveInstance
2026-05-05T02:16:14.7888866Z     move_state_test.go:15: Creating execution project (1): test-acc-tf-p-1122943466533213496
2026-05-05T02:16:14.7889392Z     move_state_test.go:15: 
2026-05-05T02:16:14.7890445Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T02:16:14.7892756Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T02:16:14.7895050Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T02:16:14.7897352Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamworkspace/move_state_test.go:15
2026-05-05T02:16:14.7898224Z         	Error:      	Received unexpected error:
2026-05-05T02:16:14.7900885Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T02:16:14.7902157Z         	Test:       	TestAccStreamWorkspace_moveInstance
2026-05-05T02:16:14.7904247Z         	Messages:   	Project creation failed: test-acc-tf-p-1122943466533213496, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T02:16:14.7905453Z --- FAIL: TestAccStreamWorkspace_moveInstance (71.45s)
```

- 2026-05-06 PASS 3 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 3 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 5 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 4 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 4 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 3 seconds
- 2026-05-04
  - PASS 3 seconds
  - PASS 4 seconds
- 2026-05-05 PASS 3 seconds
- 2026-05-06 PASS 3 seconds
