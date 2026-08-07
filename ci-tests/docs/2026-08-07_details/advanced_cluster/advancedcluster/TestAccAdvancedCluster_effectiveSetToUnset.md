# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveSetToUnset Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:51](#error-2026-07-09t0051320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.01s
[2026-07-10 00:49](#error-2026-07-10t0049430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a5041a4af0479f8ffb2fe03/clusters/test-acc-tf-c-1097675554989971914 | dev | flaky_500 | 2365.03s
[2026-07-14 00:43](#error-2026-07-14t0043450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-07-16 00:44](#error-2026-07-16t0044430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.04s
[2026-07-21 00:46](#error-2026-07-21t0046470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.06s
[2026-07-23 00:47](#error-2026-07-23t0047200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.10s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:51:32+00:00
```
2026-07-09T00:51:32.6461452Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-07-09T00:52:45.7785056Z     shared_resource.go:160: 
2026-07-09T00:52:45.7787404Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:52:45.7790050Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:52:45.7792271Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:52:45.7794125Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:52:45.7796363Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:52:45.7798363Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-09T00:52:45.7800390Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:55
2026-07-09T00:52:45.7801244Z         	Error:      	Received unexpected error:
2026-07-09T00:52:45.7803225Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:52:45.7804577Z         	Test:       	TestAccAdvancedCluster_effectiveSetToUnset
2026-07-09T00:52:45.7806406Z         	Messages:   	Project creation failed: test-acc-tf-p-7736123943156663266, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:52:45.7807666Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (73.14s)
```

- 2026-07-10

### Error 2026-07-10T00:49:43+00:00
```
2026-07-10T00:49:43.0251102Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-07-10T01:39:05.1811328Z === CONT  TestAccAdvancedCluster_effectiveSetToUnset
2026-07-10T02:18:30.4707637Z === NAME  TestAccAdvancedCluster_effectiveSetToUnset
2026-07-10T02:18:30.4709112Z     effective_fields_test.go:58: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:18:30.4710066Z         
2026-07-10T02:18:30.4710542Z         Error: Error in delete
2026-07-10T02:18:30.4710998Z         
2026-07-10T02:18:30.4711787Z         cluster name: test-acc-tf-c-1097675554989971914, API error details:
2026-07-10T02:18:30.4713492Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041a4af0479f8ffb2fe03/clusters/test-acc-tf-c-1097675554989971914
2026-07-10T02:18:30.4715039Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:18:30.4716224Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:18:30.4717026Z         BadRequestDetail: 
2026-07-10T02:18:30.4717639Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (2365.29s)
```

- 2026-07-11 PASS 18 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 22 minutes
- 2026-07-14

### Error 2026-07-14T00:43:45+00:00
```
2026-07-14T00:43:45.0802226Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-07-14T00:44:47.2531031Z     shared_resource.go:160: 
2026-07-14T00:44:47.2533067Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:44:47.2536410Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-14T00:44:47.2539062Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-14T00:44:47.2541891Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-14T00:44:47.2544635Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-14T00:44:47.2547733Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-14T00:44:47.2550594Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:55
2026-07-14T00:44:47.2551726Z         	Error:      	Received unexpected error:
2026-07-14T00:44:47.2554072Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:44:47.2556280Z         	Test:       	TestAccAdvancedCluster_effectiveSetToUnset
2026-07-14T00:44:47.2559735Z         	Messages:   	Project creation failed: test-acc-tf-p-3220342689187046766, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:44:47.2562319Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (62.18s)
```

- 2026-07-15 PASS 25 minutes
- 2026-07-16

### Error 2026-07-16T00:44:43+00:00
```
2026-07-16T00:44:43.2649745Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-07-16T00:46:04.6311706Z     shared_resource.go:160: 
2026-07-16T00:46:04.6313165Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:46:04.6315121Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-16T00:46:04.6317056Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-16T00:46:04.6318520Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-16T00:46:04.6319992Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-16T00:46:04.6321563Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-16T00:46:04.6323192Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:55
2026-07-16T00:46:04.6324055Z         	Error:      	Received unexpected error:
2026-07-16T00:46:04.6325623Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:46:04.6326495Z         	Test:       	TestAccAdvancedCluster_effectiveSetToUnset
2026-07-16T00:46:04.6327885Z         	Messages:   	Project creation failed: test-acc-tf-p-8448567787969830977, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:46:04.6328832Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (81.37s)
```

- 2026-07-17 PASS 27 minutes
- 2026-07-18 PASS 38 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:46:47+00:00
```
2026-07-21T00:46:47.3440942Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-07-21T00:48:10.9122405Z     shared_resource.go:160: 
2026-07-21T00:48:10.9123539Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:48:10.9125369Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:48:10.9127181Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:48:10.9128943Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:48:10.9130942Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:48:10.9132879Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-21T00:48:10.9134840Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:55
2026-07-21T00:48:10.9135668Z         	Error:      	Received unexpected error:
2026-07-21T00:48:10.9137611Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:48:10.9138788Z         	Test:       	TestAccAdvancedCluster_effectiveSetToUnset
2026-07-21T00:48:10.9140779Z         	Messages:   	Project creation failed: test-acc-tf-p-8472852239333935564, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:48:10.9141931Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (83.57s)
```

- 2026-07-22 PASS 45 minutes
- 2026-07-23

### Error 2026-07-23T00:47:20+00:00
```
2026-07-23T00:47:20.4778946Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-07-23T00:48:22.4575536Z     shared_resource.go:160: 
2026-07-23T00:48:22.4577984Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:22.4580613Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:48:22.4582777Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:48:22.4584619Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:48:22.4586425Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:48:22.4588371Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-23T00:48:22.4590375Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:55
2026-07-23T00:48:22.4591213Z         	Error:      	Received unexpected error:
2026-07-23T00:48:22.4593389Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:22.4594519Z         	Test:       	TestAccAdvancedCluster_effectiveSetToUnset
2026-07-23T00:48:22.4596316Z         	Messages:   	Project creation failed: test-acc-tf-p-9187402340173445094, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:22.4597535Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (61.98s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 26 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 28 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 16 minutes
  - PASS 15 minutes
- 2026-08-01 PASS 16 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 16 minutes
- 2026-08-04 PASS 19 minutes
- 2026-08-05 PASS 16 minutes
- 2026-08-06 PASS 18 minutes
- 2026-08-07 PASS 18 minutes

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
  - PASS 29 minutes
  - PASS 15 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 30 minutes
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
  - PASS 18 minutes
  - PASS 19 minutes
- 2026-07-30 PASS 15 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 16 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
