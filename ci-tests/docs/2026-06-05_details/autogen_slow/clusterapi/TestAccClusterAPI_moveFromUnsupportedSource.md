# autogen_slow/clusterapi/TestAccClusterAPI_moveFromUnsupportedSource Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 7)
Success rate: 77.42%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:02](#error-2026-05-09t0102470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.09s
[2026-05-19 01:06](#error-2026-05-19t0106130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.00s
[2026-05-23 01:35](#error-2026-05-23t0135220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.08s
[2026-05-26 02:15](#error-2026-05-26t0215080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.10s
[2026-05-28 01:01](#error-2026-05-28t0101280000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-05-30 01:05](#error-2026-05-30t0105140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.03s
[2026-06-02 01:14](#error-2026-06-02t0114070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 3 seconds
  - PASS 4 seconds
- 2026-05-08 PASS 3 seconds
- 2026-05-09

### Error 2026-05-09T01:02:47+00:00
```
2026-05-09T01:02:47.9495960Z === RUN   TestAccClusterAPI_moveFromUnsupportedSource
2026-05-09T01:02:47.9496530Z     move_test.go:43: Creating execution project (1): test-acc-tf-p-8357900107182127164
2026-05-09T01:02:47.9496987Z     move_test.go:43: 
2026-05-09T01:02:47.9497869Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:02:47.9499610Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:02:47.9501572Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:02:47.9503371Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:43
2026-05-09T01:02:47.9504136Z         	Error:      	Received unexpected error:
2026-05-09T01:02:47.9506061Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:47.9507087Z         	Test:       	TestAccClusterAPI_moveFromUnsupportedSource
2026-05-09T01:02:47.9508811Z         	Messages:   	Project creation failed: test-acc-tf-p-8357900107182127164, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:47.9509956Z --- FAIL: TestAccClusterAPI_moveFromUnsupportedSource (70.86s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 3 seconds
- 2026-05-12 PASS 47 seconds
- 2026-05-13 PASS 3 seconds
- 2026-05-14 PASS 45 seconds
- 2026-05-15 PASS 3 seconds
- 2026-05-16 PASS 44 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 3 seconds
- 2026-05-19

### Error 2026-05-19T01:06:13+00:00
```
2026-05-19T01:06:13.4536658Z === RUN   TestAccClusterAPI_moveFromUnsupportedSource
2026-05-19T01:06:13.4537154Z     move_test.go:43: Creating execution project (1): test-acc-tf-p-7558092699109988861
2026-05-19T01:06:13.4537549Z     move_test.go:43: 
2026-05-19T01:06:13.4538269Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:06:13.4540368Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:06:13.4542466Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:06:13.4543878Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:43
2026-05-19T01:06:13.4544741Z         	Error:      	Received unexpected error:
2026-05-19T01:06:13.4546250Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:06:13.4547087Z         	Test:       	TestAccClusterAPI_moveFromUnsupportedSource
2026-05-19T01:06:13.4548463Z         	Messages:   	Project creation failed: test-acc-tf-p-7558092699109988861, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:06:13.4549369Z --- FAIL: TestAccClusterAPI_moveFromUnsupportedSource (78.03s)
```

- 2026-05-20 PASS 3 seconds
- 2026-05-21 PASS a minute
- 2026-05-22 PASS 3 seconds
- 2026-05-23

### Error 2026-05-23T01:35:22+00:00
```
2026-05-23T01:35:22.3013166Z === RUN   TestAccClusterAPI_moveFromUnsupportedSource
2026-05-23T01:35:22.3013818Z     move_test.go:43: Creating execution project (1): test-acc-tf-p-7855845170023740559
2026-05-23T01:35:22.3014284Z     move_test.go:43: 
2026-05-23T01:35:22.3015197Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:35:22.3017059Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:35:22.3018907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:35:22.3020792Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:43
2026-05-23T01:35:22.3021572Z         	Error:      	Received unexpected error:
2026-05-23T01:35:22.3023903Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:35:22.3025008Z         	Test:       	TestAccClusterAPI_moveFromUnsupportedSource
2026-05-23T01:35:22.3026840Z         	Messages:   	Project creation failed: test-acc-tf-p-7855845170023740559, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:35:22.3028073Z --- FAIL: TestAccClusterAPI_moveFromUnsupportedSource (82.85s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 2 seconds
- 2026-05-26

### Error 2026-05-26T02:15:08+00:00
```
2026-05-26T02:15:08.3725489Z === RUN   TestAccClusterAPI_moveFromUnsupportedSource
2026-05-26T02:15:08.3726043Z     move_test.go:43: Creating execution project (1): test-acc-tf-p-789450338422829493
2026-05-26T02:15:08.3726492Z     move_test.go:43: 
2026-05-26T02:15:08.3727376Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:15:08.3729109Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:15:08.3730828Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:15:08.3732823Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:43
2026-05-26T02:15:08.3733597Z         	Error:      	Received unexpected error:
2026-05-26T02:15:08.3735508Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:15:08.3736537Z         	Test:       	TestAccClusterAPI_moveFromUnsupportedSource
2026-05-26T02:15:08.3738242Z         	Messages:   	Project creation failed: test-acc-tf-p-789450338422829493, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:15:08.3739373Z --- FAIL: TestAccClusterAPI_moveFromUnsupportedSource (65.98s)
```

- 2026-05-27 PASS 2 seconds
- 2026-05-28

### Error 2026-05-28T01:01:28+00:00
```
2026-05-28T01:01:28.8751826Z === RUN   TestAccClusterAPI_moveFromUnsupportedSource
2026-05-28T01:01:28.8752395Z     move_test.go:43: Creating execution project (1): test-acc-tf-p-8416999889207006801
2026-05-28T01:01:28.8752868Z     move_test.go:43: 
2026-05-28T01:01:28.8753719Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:28.8755432Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:28.8757120Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:28.8758847Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:43
2026-05-28T01:01:28.8759592Z         	Error:      	Received unexpected error:
2026-05-28T01:01:28.8761433Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:28.8763198Z         	Test:       	TestAccClusterAPI_moveFromUnsupportedSource
2026-05-28T01:01:28.8764893Z         	Messages:   	Project creation failed: test-acc-tf-p-8416999889207006801, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:28.8766035Z --- FAIL: TestAccClusterAPI_moveFromUnsupportedSource (64.81s)
```

- 2026-05-29 PASS 3 seconds
- 2026-05-30

### Error 2026-05-30T01:05:14+00:00
```
2026-05-30T01:05:14.4769834Z === RUN   TestAccClusterAPI_moveFromUnsupportedSource
2026-05-30T01:05:14.4770434Z     move_test.go:43: Creating execution project (1): test-acc-tf-p-3792426993733461899
2026-05-30T01:05:14.4771249Z     move_test.go:43: 
2026-05-30T01:05:14.4772157Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:05:14.4773951Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:05:14.4775741Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:05:14.4777544Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:43
2026-05-30T01:05:14.4778312Z         	Error:      	Received unexpected error:
2026-05-30T01:05:14.4780251Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:05:14.4781481Z         	Test:       	TestAccClusterAPI_moveFromUnsupportedSource
2026-05-30T01:05:14.4783270Z         	Messages:   	Project creation failed: test-acc-tf-p-3792426993733461899, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:05:14.4784480Z --- FAIL: TestAccClusterAPI_moveFromUnsupportedSource (83.26s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 3 seconds
- 2026-06-02

### Error 2026-06-02T01:14:07+00:00
```
2026-06-02T01:14:07.1452601Z === RUN   TestAccClusterAPI_moveFromUnsupportedSource
2026-06-02T01:14:07.1453200Z     move_test.go:43: Creating execution project (1): test-acc-tf-p-4786651526094609917
2026-06-02T01:14:07.1453681Z     move_test.go:43: 
2026-06-02T01:14:07.1454604Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:14:07.1456476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:14:07.1458326Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:14:07.1460219Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:43
2026-06-02T01:14:07.1461022Z         	Error:      	Received unexpected error:
2026-06-02T01:14:07.1463315Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:14:07.1464441Z         	Test:       	TestAccClusterAPI_moveFromUnsupportedSource
2026-06-02T01:14:07.1466275Z         	Messages:   	Project creation failed: test-acc-tf-p-4786651526094609917, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:14:07.1467522Z --- FAIL: TestAccClusterAPI_moveFromUnsupportedSource (68.48s)
```

- 2026-06-03 PASS 3 seconds
- 2026-06-04 PASS 3 seconds
- 2026-06-05 PASS 3 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 2 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 4 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 3 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 2 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
