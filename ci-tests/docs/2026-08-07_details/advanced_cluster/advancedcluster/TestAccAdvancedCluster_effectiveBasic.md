# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveBasic Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:49](#error-2026-07-09t0049110000) |  | dev | flaky_500 | 56.02s
[2026-07-14 00:41](#error-2026-07-14t0041180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.09s
[2026-07-16 00:42](#error-2026-07-16t0042350000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s
[2026-07-21 00:44](#error-2026-07-21t0044410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.08s
[2026-07-23 00:45](#error-2026-07-23t0045130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:49:11+00:00
```
2026-07-09T00:49:11.9401595Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-07-09T00:50:08.1484018Z     shared_resource.go:160: 
2026-07-09T00:50:08.1486024Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:50:08.1488508Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:50:08.1490691Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:50:08.1492849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:50:08.1494988Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:50:08.1496979Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-09T00:50:08.1499025Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:14
2026-07-09T00:50:08.1499865Z         	Error:      	Received unexpected error:
2026-07-09T00:50:08.1500813Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:50:08.1501445Z         	Test:       	TestAccAdvancedCluster_effectiveBasic
2026-07-09T00:50:08.1502572Z         	Messages:   	Project creation failed: test-acc-tf-p-7185970408313763318, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:50:08.1503539Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (56.21s)
```

- 2026-07-10 PASS 46 minutes
- 2026-07-11 PASS 18 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 22 minutes
- 2026-07-14

### Error 2026-07-14T00:41:18+00:00
```
2026-07-14T00:41:18.4256582Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-07-14T00:42:23.3806679Z     shared_resource.go:160: 
2026-07-14T00:42:23.3807925Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:42:23.3810349Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-14T00:42:23.3812623Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-14T00:42:23.3814651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-14T00:42:23.3816664Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-14T00:42:23.3818749Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-14T00:42:23.3820812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:14
2026-07-14T00:42:23.3821781Z         	Error:      	Received unexpected error:
2026-07-14T00:42:23.3823776Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:42:23.3824868Z         	Test:       	TestAccAdvancedCluster_effectiveBasic
2026-07-14T00:42:23.3826664Z         	Messages:   	Project creation failed: test-acc-tf-p-987811566737944881, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:42:23.3827875Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (64.95s)
```

- 2026-07-15 PASS 22 minutes
- 2026-07-16

### Error 2026-07-16T00:42:35+00:00
```
2026-07-16T00:42:35.2856035Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-07-16T00:43:38.6020427Z     shared_resource.go:160: 
2026-07-16T00:43:38.6023370Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:43:38.6025227Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-16T00:43:38.6026681Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-16T00:43:38.6028114Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-16T00:43:38.6029668Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-16T00:43:38.6031395Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-16T00:43:38.6033214Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:14
2026-07-16T00:43:38.6034036Z         	Error:      	Received unexpected error:
2026-07-16T00:43:38.6035709Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:43:38.6036632Z         	Test:       	TestAccAdvancedCluster_effectiveBasic
2026-07-16T00:43:38.6038140Z         	Messages:   	Project creation failed: test-acc-tf-p-8825052963007095846, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:43:38.6039194Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (63.32s)
```

- 2026-07-17 PASS 27 minutes
- 2026-07-18 PASS 28 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:44:41+00:00
```
2026-07-21T00:44:41.6679007Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-07-21T00:45:45.4712832Z     shared_resource.go:160: 
2026-07-21T00:45:45.4714369Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:45:45.4716211Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:45:45.4717998Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:45:45.4719801Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:45:45.4721878Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:45:45.4723821Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-21T00:45:45.4725794Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:14
2026-07-21T00:45:45.4726609Z         	Error:      	Received unexpected error:
2026-07-21T00:45:45.4728549Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:45:45.4729579Z         	Test:       	TestAccAdvancedCluster_effectiveBasic
2026-07-21T00:45:45.4731509Z         	Messages:   	Project creation failed: test-acc-tf-p-3044410490882311156, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:45:45.4732668Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (63.80s)
```

- 2026-07-22 PASS 57 minutes
- 2026-07-23

### Error 2026-07-23T00:45:13+00:00
```
2026-07-23T00:45:13.2264849Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-07-23T00:46:14.8505660Z     shared_resource.go:160: 
2026-07-23T00:46:14.8509019Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:46:14.8510955Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:46:14.8513276Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:46:14.8515136Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:46:14.8517046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:46:14.8518999Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-23T00:46:14.8521012Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:14
2026-07-23T00:46:14.8522067Z         	Error:      	Received unexpected error:
2026-07-23T00:46:14.8524036Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:14.8525132Z         	Test:       	TestAccAdvancedCluster_effectiveBasic
2026-07-23T00:46:14.8526906Z         	Messages:   	Project creation failed: test-acc-tf-p-7595389862751531934, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:14.8528104Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (61.62s)
```

- 2026-07-24 PASS 48 minutes
- 2026-07-25 PASS 22 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 19 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 15 minutes
  - PASS 16 minutes
- 2026-08-01 PASS 16 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 19 minutes
- 2026-08-04 PASS 17 minutes
- 2026-08-05 PASS 16 minutes
- 2026-08-06 PASS 15 minutes
- 2026-08-07 PASS 20 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 23 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 29 minutes
  - PASS 16 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 20 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 18 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 17 minutes
  - PASS 16 minutes
- 2026-07-30 PASS 21 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 17 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
