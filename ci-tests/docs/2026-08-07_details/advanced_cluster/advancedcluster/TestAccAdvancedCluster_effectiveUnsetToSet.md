# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveUnsetToSet Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:50](#error-2026-07-09t0050080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.05s
[2026-07-14 00:42](#error-2026-07-14t0042230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.07s
[2026-07-16 00:43](#error-2026-07-16t0043380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.07s
[2026-07-21 00:45](#error-2026-07-21t0045450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s
[2026-07-23 00:46](#error-2026-07-23t0046140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:50:08+00:00
```
2026-07-09T00:50:08.1503957Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-07-09T00:51:32.6427482Z     shared_resource.go:160: 
2026-07-09T00:51:32.6431151Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:51:32.6437438Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:51:32.6440638Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:51:32.6443951Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:51:32.6447519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:51:32.6451212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-09T00:51:32.6453382Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:33
2026-07-09T00:51:32.6454449Z         	Error:      	Received unexpected error:
2026-07-09T00:51:32.6456482Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:32.6457948Z         	Test:       	TestAccAdvancedCluster_effectiveUnsetToSet
2026-07-09T00:51:32.6459764Z         	Messages:   	Project creation failed: test-acc-tf-p-4070088540920252113, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:32.6460999Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (84.49s)
```

- 2026-07-10 PASS 44 minutes
- 2026-07-11 PASS 19 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 18 minutes
- 2026-07-14

### Error 2026-07-14T00:42:23+00:00
```
2026-07-14T00:42:23.3828302Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-07-14T00:43:45.0770015Z     shared_resource.go:160: 
2026-07-14T00:43:45.0773183Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:43:45.0778852Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-14T00:43:45.0782567Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-14T00:43:45.0785920Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-14T00:43:45.0788141Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-14T00:43:45.0791104Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-14T00:43:45.0794317Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:33
2026-07-14T00:43:45.0795169Z         	Error:      	Received unexpected error:
2026-07-14T00:43:45.0797147Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:43:45.0798257Z         	Test:       	TestAccAdvancedCluster_effectiveUnsetToSet
2026-07-14T00:43:45.0800068Z         	Messages:   	Project creation failed: test-acc-tf-p-1074333400036497527, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:43:45.0801520Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (81.70s)
```

- 2026-07-15 PASS 25 minutes
- 2026-07-16

### Error 2026-07-16T00:43:38+00:00
```
2026-07-16T00:43:38.6039829Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-07-16T00:44:43.2612834Z     shared_resource.go:160: 
2026-07-16T00:44:43.2615176Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:44:43.2619909Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-16T00:44:43.2625083Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-16T00:44:43.2628618Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-16T00:44:43.2630905Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-16T00:44:43.2633641Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-16T00:44:43.2636115Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:33
2026-07-16T00:44:43.2637388Z         	Error:      	Received unexpected error:
2026-07-16T00:44:43.2642229Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:43.2645602Z         	Test:       	TestAccAdvancedCluster_effectiveUnsetToSet
2026-07-16T00:44:43.2648070Z         	Messages:   	Project creation failed: test-acc-tf-p-186178740729145513, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:43.2649275Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (64.66s)
```

- 2026-07-17 PASS 27 minutes
- 2026-07-18 PASS 18 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:45:45+00:00
```
2026-07-21T00:45:45.4733118Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-07-21T00:46:47.3410221Z     shared_resource.go:160: 
2026-07-21T00:46:47.3411790Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:46:47.3417163Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:46:47.3421564Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:46:47.3424937Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:46:47.3427941Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:46:47.3430594Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-21T00:46:47.3432955Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:33
2026-07-21T00:46:47.3433896Z         	Error:      	Received unexpected error:
2026-07-21T00:46:47.3436213Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:47.3437301Z         	Test:       	TestAccAdvancedCluster_effectiveUnsetToSet
2026-07-21T00:46:47.3439230Z         	Messages:   	Project creation failed: test-acc-tf-p-770802406127511591, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:47.3440502Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (61.87s)
```

- 2026-07-22 PASS 48 minutes
- 2026-07-23

### Error 2026-07-23T00:46:14+00:00
```
2026-07-23T00:46:14.8528538Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-07-23T00:47:20.4748065Z     shared_resource.go:160: 
2026-07-23T00:47:20.4750002Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:47:20.4752518Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:47:20.4755062Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:47:20.4757244Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:47:20.4759374Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:47:20.4761705Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-23T00:47:20.4764181Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:33
2026-07-23T00:47:20.4765028Z         	Error:      	Received unexpected error:
2026-07-23T00:47:20.4766992Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:20.4769111Z         	Test:       	TestAccAdvancedCluster_effectiveUnsetToSet
2026-07-23T00:47:20.4775431Z         	Messages:   	Project creation failed: test-acc-tf-p-7898914615263844473, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:20.4778496Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (65.62s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 25 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 21 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 15 minutes
  - PASS 14 minutes
- 2026-08-01 PASS 18 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 16 minutes
- 2026-08-04 PASS 17 minutes
- 2026-08-05 PASS 14 minutes
- 2026-08-06 PASS 15 minutes
- 2026-08-07 PASS 14 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 24 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 19 minutes
  - PASS 14 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 25 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 17 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 17 minutes
  - PASS 16 minutes
- 2026-07-30 PASS 15 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 18 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
