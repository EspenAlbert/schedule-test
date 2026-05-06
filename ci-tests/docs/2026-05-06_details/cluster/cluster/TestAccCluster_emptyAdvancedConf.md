# cluster/cluster/TestAccCluster_emptyAdvancedConf Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:50](#error-2026-04-16t0050580000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e0325d1ec945fedc71bf72/clusters | dev | out_of_capacity | 20.08s
[2026-04-30 00:59](#error-2026-04-30t0059210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.10s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 45 minutes
- 2026-04-08 PASS 21 minutes
- 2026-04-09 PASS 31 minutes
- 2026-04-10 PASS 34 minutes
- 2026-04-11 PASS 20 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 28 minutes
- 2026-04-14 PASS 19 minutes
- 2026-04-15 PASS 26 minutes
- 2026-04-16

### Error 2026-04-16T00:50:58+00:00
```
2026-04-16T00:50:58.7661393Z === RUN   TestAccCluster_emptyAdvancedConf
2026-04-16T00:53:12.0764227Z === CONT  TestAccCluster_emptyAdvancedConf
2026-04-16T00:53:32.0771847Z === NAME  TestAccCluster_emptyAdvancedConf
2026-04-16T00:53:32.0773211Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:53:32.076864646Z, ProjectID: 69e0325d1ec945fedc71bf72, Cluster name: test-acc-tf-c-850136153511149359
2026-04-16T00:53:32.8218451Z    test_working_directory=/tmp/plugintest3230810429 test_step_number=1 test_terraform_path=/home/runner/work/_temp/9471bf85-4be6-4dec-8183-4ca56d6cc8e8/terraform test_name=TestAccCluster_emptyAdvancedConf
2026-04-16T00:53:32.8220177Z     resource_cluster_test.go:225: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:53:32.8220888Z         
2026-04-16T00:53:32.8222867Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e0325d1ec945fedc71bf72/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:53:32.8224110Z         
2026-04-16T00:53:32.8224445Z           with mongodbatlas_cluster.test,
2026-04-16T00:53:32.8225262Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-04-16T00:53:32.8225882Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-04-16T00:53:32.8226212Z         
2026-04-16T00:53:32.8702263Z --- FAIL: TestAccCluster_emptyAdvancedConf (20.80s)
```

- 2026-04-17 PASS 23 minutes
- 2026-04-18 PASS 27 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 21 minutes
- 2026-04-21 PASS 26 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 28 minutes
- 2026-04-24 PASS 20 minutes
- 2026-04-25 PASS 18 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 22 minutes
- 2026-04-28 PASS 24 minutes
- 2026-04-29 PASS 21 minutes
- 2026-04-30

### Error 2026-04-30T00:59:21+00:00
```
2026-04-30T00:59:21.2165113Z === RUN   TestAccCluster_emptyAdvancedConf
2026-04-30T01:00:29.1805048Z     shared_resource.go:160: 
2026-04-30T01:00:29.1807990Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:00:29.1811203Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-30T01:00:29.1814399Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-30T01:00:29.1816267Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-30T01:00:29.1818092Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-30T01:00:29.1819995Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:224
2026-04-30T01:00:29.1820805Z         	Error:      	Received unexpected error:
2026-04-30T01:00:29.1822751Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:00:29.1824040Z         	Test:       	TestAccCluster_emptyAdvancedConf
2026-04-30T01:00:29.1826216Z         	Messages:   	Project creation failed: test-acc-tf-p-1148213844001958233, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:00:29.1827400Z --- FAIL: TestAccCluster_emptyAdvancedConf (67.97s)
```

- 2026-05-01 PASS 21 minutes
- 2026-05-02 PASS 17 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 24 minutes
- 2026-05-05 PASS 39 minutes
- 2026-05-06 PASS 23 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 18 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 21 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 21 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 21 minutes
  - PASS 16 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 22 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 21 minutes
- 2026-05-04 PASS 21 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 20 minutes
