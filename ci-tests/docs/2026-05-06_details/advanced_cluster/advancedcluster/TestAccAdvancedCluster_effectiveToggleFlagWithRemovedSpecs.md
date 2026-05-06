# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:46](#error-2026-04-07t0046570000) |  | dev | timeout | 13372.07s
[2026-04-16 00:51](#error-2026-04-16t0051220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032838379397d109d0bb0/clusters | dev | out_of_capacity | 5.04s
[2026-04-30 00:56](#error-2026-04-30t0056540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.03s
[2026-05-05 00:53](#error-2026-05-05t0053180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:46:57+00:00
```
2026-04-07T00:46:57.6021301Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-04-07T00:48:53.7866383Z === CONT  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-04-07T04:31:46.4566394Z === NAME  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-04-07T04:31:46.4567776Z     effective_fields_test.go:289: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:31:46.4568310Z         
2026-04-07T04:31:46.4568565Z         Error: Error in delete
2026-04-07T04:31:46.4569030Z         
2026-04-07T04:31:46.4569495Z         cluster=test-acc-tf-c-7120918620345256409 didn't reach desired state:
2026-04-07T04:31:46.4570130Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2026-04-07T04:31:46.4570626Z         state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:31:46.4571072Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (13372.68s)
```

- 2026-04-08 PASS 49 minutes
- 2026-04-09 PASS an hour
- 2026-04-10 PASS an hour
- 2026-04-11 PASS 48 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 52 minutes
- 2026-04-14 PASS 54 minutes
- 2026-04-15 PASS 47 minutes
- 2026-04-16

### Error 2026-04-16T00:51:22+00:00
```
2026-04-16T00:51:22.2093470Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-04-16T00:54:54.6493339Z === CONT  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-04-16T00:54:59.1751103Z === NAME  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-04-16T00:54:59.1751746Z     effective_fields_test.go:289: Step 1/6 error: Error running apply: exit status 1
2026-04-16T00:54:59.1752161Z         
2026-04-16T00:54:59.1752489Z         Error: Error in create
2026-04-16T00:54:59.1753031Z         
2026-04-16T00:54:59.1753566Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.1755282Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.1756732Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.1757244Z         
2026-04-16T00:54:59.1757906Z         cluster name: test-acc-tf-c-2539713004083513035, API error details:
2026-04-16T00:54:59.1758645Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032838379397d109d0bb0/clusters
2026-04-16T00:54:59.1759536Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.1760215Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.1760727Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.2185031Z   
2026-04-16T00:54:59.3931832Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (5.37s)
```

- 2026-04-17 PASS 46 minutes
- 2026-04-18 PASS an hour
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS an hour
- 2026-04-22 PASS an hour
- 2026-04-23 PASS an hour
- 2026-04-24 PASS 57 minutes
- 2026-04-25 PASS 47 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 44 minutes
- 2026-04-28 PASS 52 minutes
- 2026-04-29 PASS 52 minutes
- 2026-04-30

### Error 2026-04-30T00:56:54+00:00
```
2026-04-30T00:56:54.4366901Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-04-30T00:58:06.7619024Z     shared_resource.go:160: 
2026-04-30T00:58:06.7624123Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:58:06.7629339Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-30T00:58:06.7633204Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-30T00:58:06.7636571Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-30T00:58:06.7642947Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-30T00:58:06.7649309Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-04-30T00:58:06.7652392Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:283
2026-04-30T00:58:06.7653735Z         	Error:      	Received unexpected error:
2026-04-30T00:58:06.7656536Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:58:06.7658146Z         	Test:       	TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-04-30T00:58:06.7661087Z         	Messages:   	Project creation failed: test-acc-tf-p-3847629761978259900, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:58:06.7662839Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (72.33s)
```

- 2026-05-01 PASS 52 minutes
- 2026-05-02 PASS 53 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS an hour
- 2026-05-05

### Error 2026-05-05T00:53:18+00:00
```
2026-05-05T00:53:18.2477498Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-05-05T00:54:36.4705092Z     shared_resource.go:160: 
2026-05-05T00:54:36.4707161Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:54:36.4710120Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-05T00:54:36.4712540Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-05T00:54:36.4714290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-05T00:54:36.4715982Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-05T00:54:36.4717882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-05T00:54:36.4719796Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:283
2026-05-05T00:54:36.4720673Z         	Error:      	Received unexpected error:
2026-05-05T00:54:36.4722586Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:54:36.4723705Z         	Test:       	TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-05-05T00:54:36.4725482Z         	Messages:   	Project creation failed: test-acc-tf-p-5331090987226343076, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:54:36.4726716Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (78.22s)
```

- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 44 minutes
  - PASS 47 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 41 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 45 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 48 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 53 minutes
- 2026-05-04 PASS an hour
- 2026-05-05: MISSING
- 2026-05-06 PASS 42 minutes
