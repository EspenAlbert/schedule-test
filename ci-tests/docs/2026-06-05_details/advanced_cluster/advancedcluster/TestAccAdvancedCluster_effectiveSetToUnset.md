# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveSetToUnset Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:03](#error-2026-05-19t0103510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.02s
[2026-05-28 01:00](#error-2026-05-28t0100240000) |  | dev | flaky_500 | 41.07s
[2026-05-30 01:02](#error-2026-05-30t0102480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-06-02 01:10](#error-2026-06-02t0110160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 37 minutes
- 2026-05-08 PASS 20 minutes
- 2026-05-09 PASS 19 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 22 minutes
- 2026-05-12 PASS 21 minutes
- 2026-05-13 PASS 25 minutes
- 2026-05-14 PASS 50 minutes
- 2026-05-15 PASS 16 minutes
- 2026-05-16 PASS 16 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 28 minutes
- 2026-05-19

### Error 2026-05-19T01:03:51+00:00
```
2026-05-19T01:03:51.8470832Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-05-19T01:05:17.0131062Z     shared_resource.go:160: 
2026-05-19T01:05:17.0132556Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:05:17.0135688Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-19T01:05:17.0138470Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-19T01:05:17.0141037Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-19T01:05:17.0143126Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-19T01:05:17.0145079Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-19T01:05:17.0147068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:55
2026-05-19T01:05:17.0147869Z         	Error:      	Received unexpected error:
2026-05-19T01:05:17.0149864Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:05:17.0150935Z         	Test:       	TestAccAdvancedCluster_effectiveSetToUnset
2026-05-19T01:05:17.0152696Z         	Messages:   	Project creation failed: test-acc-tf-p-537517014640046204, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:05:17.0154035Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (85.17s)
```

- 2026-05-20 PASS 24 minutes
- 2026-05-21 PASS 19 minutes
- 2026-05-22 PASS 38 minutes
- 2026-05-23 PASS 29 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 19 minutes
- 2026-05-26 PASS 21 minutes
- 2026-05-27 PASS 58 minutes
- 2026-05-28

### Error 2026-05-28T01:00:24+00:00
```
2026-05-28T01:00:24.4163337Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-05-28T01:01:06.0892017Z     shared_resource.go:160: 
2026-05-28T01:01:06.0893131Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:06.0894950Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:06.0896752Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:06.0898732Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:06.0900590Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:06.0902511Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-28T01:01:06.0904484Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:55
2026-05-28T01:01:06.0905327Z         	Error:      	Received unexpected error:
2026-05-28T01:01:06.0906285Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-05-28T01:01:06.0906966Z         	Test:       	TestAccAdvancedCluster_effectiveSetToUnset
2026-05-28T01:01:06.0908373Z         	Messages:   	Project creation failed: test-acc-tf-p-323085357067662448, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-05-28T01:01:06.0909185Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (41.68s)
```

- 2026-05-29 PASS 17 minutes
- 2026-05-30

### Error 2026-05-30T01:02:48+00:00
```
2026-05-30T01:02:48.9204914Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-05-30T01:03:53.6632735Z     shared_resource.go:160: 
2026-05-30T01:03:53.6634395Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:03:53.6637152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-30T01:03:53.6640113Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-30T01:03:53.6642429Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-30T01:03:53.6644310Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-30T01:03:53.6646270Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-30T01:03:53.6648294Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:55
2026-05-30T01:03:53.6649424Z         	Error:      	Received unexpected error:
2026-05-30T01:03:53.6651439Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:53.6652555Z         	Test:       	TestAccAdvancedCluster_effectiveSetToUnset
2026-05-30T01:03:53.6654342Z         	Messages:   	Project creation failed: test-acc-tf-p-312057714457452770, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:53.6655541Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (64.75s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 42 minutes
- 2026-06-02

### Error 2026-06-02T01:10:16+00:00
```
2026-06-02T01:10:16.7788824Z === RUN   TestAccAdvancedCluster_effectiveSetToUnset
2026-06-02T01:11:19.5189490Z     shared_resource.go:160: 
2026-06-02T01:11:19.5193847Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:11:19.5196821Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-06-02T01:11:19.5198850Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-06-02T01:11:19.5201341Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-06-02T01:11:19.5203380Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-06-02T01:11:19.5205565Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-06-02T01:11:19.5207791Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:55
2026-06-02T01:11:19.5208634Z         	Error:      	Received unexpected error:
2026-06-02T01:11:19.5210896Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:11:19.5212040Z         	Test:       	TestAccAdvancedCluster_effectiveSetToUnset
2026-06-02T01:11:19.5213877Z         	Messages:   	Project creation failed: test-acc-tf-p-1422449164048709848, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:11:19.5215116Z --- FAIL: TestAccAdvancedCluster_effectiveSetToUnset (62.74s)
```

- 2026-06-03 PASS 24 minutes
- 2026-06-04 PASS 42 minutes
- 2026-06-05 PASS 24 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 20 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 14 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 21 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 14 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
