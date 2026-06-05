# cluster/cluster/TestAccCluster_ProviderRegionName Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 5)
Success rate: 83.87%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:57](#error-2026-05-09t0057020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.03s
[2026-05-23 01:00](#error-2026-05-23t0100410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.02s
[2026-05-28 00:57](#error-2026-05-28t0057240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.09s
[2026-05-30 01:02](#error-2026-05-30t0102120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS an hour
  - PASS an hour
- 2026-05-08 PASS 50 minutes
- 2026-05-09

### Error 2026-05-09T00:57:02+00:00
```
2026-05-09T00:57:02.1983717Z === RUN   TestAccCluster_ProviderRegionName
2026-05-09T00:58:14.4755321Z     shared_resource.go:160: 
2026-05-09T00:58:14.4758610Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:58:14.4762351Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-09T00:58:14.4764467Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-09T00:58:14.4766540Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-09T00:58:14.4768620Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-09T00:58:14.4771049Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:522
2026-05-09T00:58:14.4772460Z         	Error:      	Received unexpected error:
2026-05-09T00:58:14.4774637Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:58:14.4775910Z         	Test:       	TestAccCluster_ProviderRegionName
2026-05-09T00:58:14.4777913Z         	Messages:   	Project creation failed: test-acc-tf-p-6853325344214822987, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:58:14.4779182Z --- FAIL: TestAccCluster_ProviderRegionName (72.28s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 45 minutes
- 2026-05-12 PASS 43 minutes
- 2026-05-13 PASS 42 minutes
- 2026-05-14 PASS an hour
- 2026-05-15 PASS 41 minutes
- 2026-05-16 PASS 36 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS an hour
- 2026-05-19 PASS 38 minutes
- 2026-05-20 PASS 41 minutes
- 2026-05-21 PASS an hour
- 2026-05-22 PASS an hour
- 2026-05-23

### Error 2026-05-23T01:00:41+00:00
```
2026-05-23T01:00:41.7867985Z === RUN   TestAccCluster_ProviderRegionName
2026-05-23T01:02:02.9814571Z     shared_resource.go:160: 
2026-05-23T01:02:02.9817734Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:02:02.9820104Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-23T01:02:02.9822411Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-23T01:02:02.9824651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-23T01:02:02.9827530Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-23T01:02:02.9830197Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:522
2026-05-23T01:02:02.9831295Z         	Error:      	Received unexpected error:
2026-05-23T01:02:02.9834108Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:02.9835491Z         	Test:       	TestAccCluster_ProviderRegionName
2026-05-23T01:02:02.9837851Z         	Messages:   	Project creation failed: test-acc-tf-p-8335317437175458893, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:02.9839065Z --- FAIL: TestAccCluster_ProviderRegionName (81.20s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 46 minutes
- 2026-05-26 PASS 38 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T00:57:24+00:00
```
2026-05-28T00:57:24.7091719Z === RUN   TestAccCluster_ProviderRegionName
2026-05-28T00:58:37.6525568Z     shared_resource.go:160: 
2026-05-28T00:58:37.6527409Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T00:58:37.6529207Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T00:58:37.6530971Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T00:58:37.6532904Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T00:58:37.6534643Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T00:58:37.6536503Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:522
2026-05-28T00:58:37.6537638Z         	Error:      	Received unexpected error:
2026-05-28T00:59:44.8962494Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:44.8965352Z         	Test:       	TestAccCluster_ProviderRegionName
2026-05-28T00:59:44.8968235Z         	Messages:   	Project creation failed: test-acc-tf-p-8026411913149253942, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:44.8970028Z --- FAIL: TestAccCluster_ProviderRegionName (72.94s)
```

- 2026-05-29 PASS 47 minutes
- 2026-05-30

### Error 2026-05-30T01:02:12+00:00
```
2026-05-30T01:02:12.1349968Z === RUN   TestAccCluster_ProviderRegionName
2026-05-30T01:03:16.6972804Z     shared_resource.go:160: 
2026-05-30T01:03:16.6974768Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:03:16.6979095Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-30T01:03:16.6981670Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-30T01:03:16.6983568Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-30T01:03:16.6985851Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-30T01:03:16.6988156Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:522
2026-05-30T01:03:16.6989012Z         	Error:      	Received unexpected error:
2026-05-30T01:03:16.6990986Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:16.6993057Z         	Test:       	TestAccCluster_ProviderRegionName
2026-05-30T01:03:16.6994844Z         	Messages:   	Project creation failed: test-acc-tf-p-4403110092183906261, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:16.6996056Z --- FAIL: TestAccCluster_ProviderRegionName (64.57s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 36 minutes
- 2026-06-03 PASS 54 minutes
- 2026-06-04 PASS an hour
- 2026-06-05 PASS 41 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-17 00:59](#error-2026-05-17t0059260000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6a0912eb3ddc9e3868e52239/clusters | qa | out_of_capacity | 2.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 39 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17

### Error 2026-05-17T00:59:26+00:00
```
2026-05-17T00:59:26.8712992Z === RUN   TestAccCluster_ProviderRegionName
2026-05-17T00:59:28.8718015Z === CONT  TestAccCluster_ProviderRegionName
2026-05-17T00:59:31.3666195Z === NAME  TestAccCluster_ProviderRegionName
2026-05-17T00:59:31.3666848Z     resource_cluster_test.go:544: Step 2/3 error: Error running apply: exit status 1
2026-05-17T00:59:31.3667363Z         
2026-05-17T00:59:31.3668854Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/6a0912eb3ddc9e3868e52239/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-05-17T00:59:31.3669914Z         
2026-05-17T00:59:31.3670315Z           with mongodbatlas_cluster.multi_region,
2026-05-17T00:59:31.3671024Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2026-05-17T00:59:31.3671675Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2026-05-17T00:59:31.3765787Z         
2026-05-17T00:59:31.4173748Z --- FAIL: TestAccCluster_ProviderRegionName (2.55s)
```

- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 40 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 38 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
