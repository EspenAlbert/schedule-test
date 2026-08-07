# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveTenantFlex Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:52](#error-2026-07-09t0052450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.02s
[2026-07-16 00:46](#error-2026-07-16t0046040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.01s
[2026-07-21 00:48](#error-2026-07-21t0048100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 95.06s
[2026-07-23 00:48](#error-2026-07-23t0048220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:52:45+00:00
```
2026-07-09T00:52:45.7808240Z === RUN   TestAccAdvancedCluster_effectiveTenantFlex
2026-07-09T00:53:50.9989443Z     shared_resource.go:160: 
2026-07-09T00:53:50.9993022Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:53:50.9998054Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:53:51.0000840Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:53:51.0003044Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:53:51.0005292Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:53:51.0007450Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:77
2026-07-09T00:53:51.0008425Z         	Error:      	Received unexpected error:
2026-07-09T00:53:51.0010926Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:53:51.0012284Z         	Test:       	TestAccAdvancedCluster_effectiveTenantFlex
2026-07-09T00:53:51.0014685Z         	Messages:   	Project creation failed: test-acc-tf-p-6969314623597043082, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:53:51.0016309Z --- FAIL: TestAccAdvancedCluster_effectiveTenantFlex (65.22s)
```

- 2026-07-10 PASS a moment
- 2026-07-11 PASS 3 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS a moment
- 2026-07-14 PASS 46 seconds
- 2026-07-15 PASS a moment
- 2026-07-16

### Error 2026-07-16T00:46:04+00:00
```
2026-07-16T00:46:04.6329225Z === RUN   TestAccAdvancedCluster_effectiveTenantFlex
2026-07-16T00:47:23.7696074Z     shared_resource.go:160: 
2026-07-16T00:47:23.7697506Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:47:23.7699913Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-16T00:47:23.7701679Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-16T00:47:23.7703810Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-16T00:47:23.7705752Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-16T00:47:23.7707586Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:77
2026-07-16T00:47:23.7708321Z         	Error:      	Received unexpected error:
2026-07-16T00:47:23.7709994Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:47:23.7711045Z         	Test:       	TestAccAdvancedCluster_effectiveTenantFlex
2026-07-16T00:47:23.7714414Z         	Messages:   	Project creation failed: test-acc-tf-p-3842439139237496573, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:47:23.7715480Z --- FAIL: TestAccAdvancedCluster_effectiveTenantFlex (79.14s)
```

- 2026-07-17 PASS 5 seconds
- 2026-07-18 PASS 5 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:48:10+00:00
```
2026-07-21T00:48:10.9142358Z === RUN   TestAccAdvancedCluster_effectiveTenantFlex
2026-07-21T00:49:46.4723845Z     shared_resource.go:160: 
2026-07-21T00:49:46.4724895Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:49:46.4727147Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:49:46.4728903Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:49:46.4730948Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:49:46.4732687Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:49:46.4734619Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:77
2026-07-21T00:49:46.4735463Z         	Error:      	Received unexpected error:
2026-07-21T00:49:46.4737427Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:46.4738513Z         	Test:       	TestAccAdvancedCluster_effectiveTenantFlex
2026-07-21T00:49:46.4740579Z         	Messages:   	Project creation failed: test-acc-tf-p-6684839270855197144, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:49:46.4741795Z --- FAIL: TestAccAdvancedCluster_effectiveTenantFlex (95.56s)
```

- 2026-07-22 PASS a moment
- 2026-07-23

### Error 2026-07-23T00:48:22+00:00
```
2026-07-23T00:48:22.4598303Z === RUN   TestAccAdvancedCluster_effectiveTenantFlex
2026-07-23T00:49:24.2853235Z     shared_resource.go:160: 
2026-07-23T00:49:24.2858815Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:24.2864372Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:24.2868341Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:24.2870840Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:24.2872985Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:24.2874957Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:77
2026-07-23T00:49:24.2875794Z         	Error:      	Received unexpected error:
2026-07-23T00:49:24.2879090Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:49:24.2880971Z         	Test:       	TestAccAdvancedCluster_effectiveTenantFlex
2026-07-23T00:49:24.2884889Z         	Messages:   	Project creation failed: test-acc-tf-p-3112242048132254260, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:49:24.2886898Z --- FAIL: TestAccAdvancedCluster_effectiveTenantFlex (61.83s)
```

- 2026-07-24 PASS a moment
- 2026-07-25 PASS 3 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 6 seconds
- 2026-07-28 PASS 4 seconds
- 2026-07-29 PASS 5 seconds
- 2026-07-30 PASS 5 seconds
- 2026-07-31
  - PASS a moment
  - PASS 5 seconds
- 2026-08-01 PASS 5 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 5 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS a moment
- 2026-08-06 PASS 4 seconds
- 2026-08-07 PASS 3 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a moment
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 4 seconds
  - PASS a moment
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a moment
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 6 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a moment
  - PASS 5 seconds
- 2026-07-30 PASS a moment
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a moment
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
