# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveComputeAutoScalingAll Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:55](#error-2026-07-09t0055210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s
[2026-07-21 00:50](#error-2026-07-21t0050490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-07-23 00:49](#error-2026-07-23t0049240000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:55:21+00:00
```
2026-07-09T00:55:21.9004731Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-07-09T00:56:25.1902353Z     shared_resource.go:160: 
2026-07-09T00:56:25.1904199Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:56:25.1907273Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:56:25.1910899Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:56:25.1913348Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:56:25.1915497Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:56:25.1917853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-09T00:56:25.1919892Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:124
2026-07-09T00:56:25.1920728Z         	Error:      	Received unexpected error:
2026-07-09T00:56:25.1922854Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:56:25.1924030Z         	Test:       	TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-07-09T00:56:25.1926259Z         	Messages:   	Project creation failed: test-acc-tf-p-2964940999230765285, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:56:25.1927551Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingAll (63.29s)
```

- 2026-07-10 PASS 45 minutes
- 2026-07-11 PASS 19 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 22 minutes
- 2026-07-14 PASS 23 minutes
- 2026-07-15 PASS 25 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 35 minutes
- 2026-07-18 PASS 27 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:50:49+00:00
```
2026-07-21T00:50:49.5801135Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-07-21T00:51:52.4935395Z     shared_resource.go:160: 
2026-07-21T00:51:52.4937076Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:51:52.4939414Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:51:52.4941887Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:51:52.4943784Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:51:52.4945697Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:51:52.4947731Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-21T00:51:52.4950509Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:124
2026-07-21T00:51:52.4953171Z         	Error:      	Received unexpected error:
2026-07-21T00:51:52.4955908Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:52.4957058Z         	Test:       	TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-07-21T00:51:52.4958812Z         	Messages:   	Project creation failed: test-acc-tf-p-4921477651943168980, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:52.4960276Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingAll (62.92s)
```

- 2026-07-22 PASS 45 minutes
- 2026-07-23

### Error 2026-07-23T00:49:24+00:00
```
2026-07-23T00:49:24.5968672Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-07-23T00:49:25.1610462Z     shared_resource.go:160: 
2026-07-23T00:49:25.1613167Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:25.1615676Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:25.1618159Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:25.1620590Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:25.1623315Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:25.1626123Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-23T00:49:25.1628317Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:124
2026-07-23T00:49:25.1629202Z         	Error:      	Received unexpected error:
2026-07-23T00:49:25.1632185Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:25.1633774Z         	Test:       	TestAccAdvancedCluster_effectiveComputeAutoScalingAll
2026-07-23T00:49:25.1636196Z         	Messages:   	Project creation failed: test-acc-tf-p-17506050707374224, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:25.1637829Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingAll (0.57s)
```

- 2026-07-24 PASS 54 minutes
- 2026-07-25 PASS 29 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 24 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 17 minutes
  - PASS 14 minutes
- 2026-08-01 PASS 18 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 19 minutes
- 2026-08-04 PASS 19 minutes
- 2026-08-05 PASS 16 minutes
- 2026-08-06 PASS 18 minutes
- 2026-08-07 PASS 21 minutes

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
  - PASS 20 minutes
  - PASS 15 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 29 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 19 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 18 minutes
  - PASS 17 minutes
- 2026-07-30 PASS 20 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 19 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
