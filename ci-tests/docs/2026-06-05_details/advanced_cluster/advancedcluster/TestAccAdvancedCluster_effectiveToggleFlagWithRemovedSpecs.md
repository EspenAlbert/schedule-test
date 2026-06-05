# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 00:55](#error-2026-05-16t0055230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.03s
[2026-05-21 01:04](#error-2026-05-21t0104310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.03s
[2026-05-23 01:00](#error-2026-05-23t0100310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.05s
[2026-05-28 01:01](#error-2026-05-28t0101160000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS an hour
- 2026-05-09 PASS an hour
- 2026-05-10: MISSING
- 2026-05-11 PASS 56 minutes
- 2026-05-12 PASS 57 minutes
- 2026-05-13 PASS an hour
- 2026-05-14 PASS an hour
- 2026-05-15 PASS 48 minutes
- 2026-05-16

### Error 2026-05-16T00:55:23+00:00
```
2026-05-16T00:55:23.0112844Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-05-16T00:56:41.3532052Z     shared_resource.go:160: 
2026-05-16T00:56:41.3537201Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:56:41.3542359Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-16T00:56:41.3545434Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-16T00:56:41.3548028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-16T00:56:41.3550234Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-16T00:56:41.3553403Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-16T00:56:41.3556212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:283
2026-05-16T00:56:41.3557047Z         	Error:      	Received unexpected error:
2026-05-16T00:56:41.3559331Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:56:41.3560812Z         	Test:       	TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-05-16T00:56:41.3562959Z         	Messages:   	Project creation failed: test-acc-tf-p-4527794124084360773, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:56:41.3564401Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (78.34s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS an hour
- 2026-05-19 PASS 55 minutes
- 2026-05-20 PASS 55 minutes
- 2026-05-21

### Error 2026-05-21T01:04:31+00:00
```
2026-05-21T01:04:31.0246368Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-05-21T01:06:03.3399569Z     shared_resource.go:160: 
2026-05-21T01:06:03.3403945Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:06:03.3409163Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-21T01:06:03.3411763Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-21T01:06:03.3413903Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-21T01:06:03.3416507Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-21T01:06:03.3421064Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-21T01:06:03.3427901Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:283
2026-05-21T01:06:03.3429454Z         	Error:      	Received unexpected error:
2026-05-21T01:06:03.3431376Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:06:03.3432557Z         	Test:       	TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-05-21T01:06:03.3434374Z         	Messages:   	Project creation failed: test-acc-tf-p-5277151857759352540, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:06:03.3435951Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (92.32s)
```

- 2026-05-22 PASS 2 hours
- 2026-05-23

### Error 2026-05-23T01:00:31+00:00
```
2026-05-23T01:00:31.2099396Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-05-23T01:01:55.7438172Z     shared_resource.go:160: 
2026-05-23T01:01:55.7444284Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:01:55.7448645Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-23T01:01:55.7451384Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-23T01:01:55.7453227Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-23T01:01:55.7454998Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-23T01:01:55.7457182Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-23T01:01:55.7460233Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:283
2026-05-23T01:01:55.7461610Z         	Error:      	Received unexpected error:
2026-05-23T01:01:55.7464598Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:55.7466621Z         	Test:       	TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-05-23T01:01:55.7468984Z         	Messages:   	Project creation failed: test-acc-tf-p-7703143475239814392, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:55.7470244Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (84.53s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS an hour
- 2026-05-26 PASS 57 minutes
- 2026-05-27 PASS 2 hours
- 2026-05-28

### Error 2026-05-28T01:01:16+00:00
```
2026-05-28T01:01:16.7307994Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-05-28T01:01:18.1888021Z     shared_resource.go:160: 
2026-05-28T01:01:18.1889420Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:18.1891240Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:18.1893012Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:18.1894779Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:18.1896600Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:18.1898693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-28T01:01:18.1900745Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:283
2026-05-28T01:01:18.1901597Z         	Error:      	Received unexpected error:
2026-05-28T01:01:18.1904646Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:18.1906190Z         	Test:       	TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-05-28T01:01:18.1908702Z         	Messages:   	Project creation failed: test-acc-tf-p-5258890854729144097, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:18.1910291Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (1.46s)
```

- 2026-05-29 PASS an hour
- 2026-05-30 PASS 42 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 51 minutes
- 2026-06-03 PASS an hour
- 2026-06-04 PASS an hour
- 2026-06-05 PASS 55 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 58 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 48 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 57 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 44 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
