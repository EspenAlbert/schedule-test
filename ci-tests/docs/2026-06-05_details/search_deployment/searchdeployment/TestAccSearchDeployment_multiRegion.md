# search_deployment/searchdeployment/TestAccSearchDeployment_multiRegion Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:57](#error-2026-05-09t0057250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 120.08s
[2026-05-15 00:57](#error-2026-05-15t0057020000) |  | dev | flaky_500 | 246.03s
[2026-05-21 01:05](#error-2026-05-21t0105070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.04s
[2026-05-30 01:02](#error-2026-05-30t0102530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS 39 minutes
- 2026-05-09

### Error 2026-05-09T00:57:25+00:00
```
2026-05-09T00:57:25.3035369Z === RUN   TestAccSearchDeployment_multiRegion
2026-05-09T00:57:25.3035820Z     resource_test.go:130: Creating execution project (1): test-acc-tf-p-8138276565739021311
2026-05-09T00:59:26.0546047Z     resource_test.go:130: 
2026-05-09T00:59:26.0548388Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:59:26.0552358Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T00:59:26.0555672Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T00:59:26.0557591Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-09T00:59:26.0559027Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:130
2026-05-09T00:59:26.0559953Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T00:59:26.0560349Z         	Error:      	Received unexpected error:
2026-05-09T00:59:26.0561821Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:59:26.0562675Z         	Test:       	TestAccSearchDeployment_multiRegion
2026-05-09T00:59:26.0563984Z         	Messages:   	Project creation failed: test-acc-tf-p-8138276565739021311, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:59:26.0564844Z --- FAIL: TestAccSearchDeployment_multiRegion (120.75s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 38 minutes
- 2026-05-12 PASS 32 minutes
- 2026-05-13 PASS 39 minutes
- 2026-05-14 PASS an hour
- 2026-05-15

### Error 2026-05-15T00:57:02+00:00
```
2026-05-15T00:57:02.0050051Z === RUN   TestAccSearchDeployment_multiRegion
2026-05-15T00:57:02.0059858Z === CONT  TestAccSearchDeployment_multiRegion
2026-05-15T01:01:08.2578943Z    test_terraform_path=/home/runner/work/_temp/5392e514-5eff-4eaa-bb98-7b42c5afbecc/terraform
2026-05-15T01:01:08.2579842Z     resource_test.go:142: Step 1/1 error: Error running apply: exit status 1
2026-05-15T01:01:08.2580242Z         
2026-05-15T01:01:08.2580505Z         Error: Error in create
2026-05-15T01:01:08.2580898Z         
2026-05-15T01:01:08.2581302Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-05-15T01:01:08.2582255Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-05-15T01:01:08.2583217Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-05-15T01:01:08.2583574Z         
2026-05-15T01:01:08.2584068Z         cluster=multi-region-cluster didn't reach desired state: IDLE, error:
2026-05-15T01:01:08.2584895Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a066f5b649b96da6eba970c/clusters/multi-region-cluster
2026-05-15T01:01:08.2586062Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-15T01:01:08.2586499Z         BadRequestDetail: 
2026-05-15T01:01:08.3122891Z --- FAIL: TestAccSearchDeployment_multiRegion (246.31s)
```

- 2026-05-16 PASS 28 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 54 minutes
- 2026-05-19 PASS 28 minutes
- 2026-05-20 PASS 37 minutes
- 2026-05-21

### Error 2026-05-21T01:05:07+00:00
```
2026-05-21T01:05:07.9964298Z === RUN   TestAccSearchDeployment_multiRegion
2026-05-21T01:05:07.9965343Z     resource_test.go:130: Creating execution project (1): test-acc-tf-p-7925480031550010270
2026-05-21T01:06:17.3621993Z     resource_test.go:130: 
2026-05-21T01:06:17.3623746Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:06:17.3626695Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:06:17.3628833Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:06:17.3630457Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-21T01:06:17.3632280Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:130
2026-05-21T01:06:17.3633668Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-21T01:06:17.3634247Z         	Error:      	Received unexpected error:
2026-05-21T01:06:17.3636032Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:06:17.3637098Z         	Test:       	TestAccSearchDeployment_multiRegion
2026-05-21T01:06:17.3638723Z         	Messages:   	Project creation failed: test-acc-tf-p-7925480031550010270, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:06:17.3639895Z --- FAIL: TestAccSearchDeployment_multiRegion (69.37s)
```

- 2026-05-22 PASS an hour
- 2026-05-23 PASS 38 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 37 minutes
- 2026-05-26 PASS 32 minutes
- 2026-05-27 PASS an hour
- 2026-05-28 PASS 39 minutes
- 2026-05-29 PASS 40 minutes
- 2026-05-30

### Error 2026-05-30T01:02:53+00:00
```
2026-05-30T01:02:53.5933166Z === RUN   TestAccSearchDeployment_multiRegion
2026-05-30T01:02:53.5933750Z     resource_test.go:130: Creating execution project (1): test-acc-tf-p-5704254433041761100
2026-05-30T01:03:55.4692078Z     resource_test.go:130: 
2026-05-30T01:03:55.4693279Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:03:55.4695575Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:03:55.4697300Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:03:55.4698922Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-30T01:03:55.4700872Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:130
2026-05-30T01:03:55.4702049Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:03:55.4702569Z         	Error:      	Received unexpected error:
2026-05-30T01:03:55.4704454Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:55.4705559Z         	Test:       	TestAccSearchDeployment_multiRegion
2026-05-30T01:03:55.4707212Z         	Messages:   	Project creation failed: test-acc-tf-p-5704254433041761100, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:55.4708330Z --- FAIL: TestAccSearchDeployment_multiRegion (61.88s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 28 minutes
- 2026-06-03 PASS 52 minutes
- 2026-06-04 PASS an hour
- 2026-06-05 PASS 42 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 34 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 33 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 34 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 31 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
