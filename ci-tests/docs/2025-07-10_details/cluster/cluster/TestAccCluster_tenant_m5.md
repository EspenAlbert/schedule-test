# cluster/cluster/TestAccCluster_tenant_m5 Test Details
# Found 117 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 115) FAIL(x 2)
Success rate: 98.29%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029400000) |  | qa |  | 0.00s
[2025-06-05 00:28](#error-2025-06-05t0028480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4be161ca93c1f0520b9/clusters/test-acc-tf-c-1347019038009368142 | dev | flaky_500 | 183.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 4 minutes
- 2025-04-13 PASS 4 minutes
- 2025-04-14 PASS 4 minutes
- 2025-04-15 PASS 4 minutes
- 2025-04-16
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-04-17 PASS 4 minutes
- 2025-04-18 PASS 4 minutes
- 2025-04-19 PASS 4 minutes
- 2025-04-20 PASS 4 minutes
- 2025-04-21 PASS 4 minutes
- 2025-04-22 PASS 4 minutes
- 2025-04-23 PASS 4 minutes
- 2025-04-24 PASS 4 minutes
- 2025-04-25 PASS 4 minutes
- 2025-04-26 PASS 4 minutes
- 2025-04-27 PASS 4 minutes
- 2025-04-28 PASS 4 minutes
- 2025-04-29 PASS 4 minutes
- 2025-04-30 PASS 4 minutes
- 2025-05-01
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-02 PASS 4 minutes
- 2025-05-03 PASS 4 minutes
- 2025-05-04 PASS 4 minutes
- 2025-05-05 PASS 4 minutes
- 2025-05-06 PASS 4 minutes
- 2025-05-07 PASS 4 minutes
- 2025-05-08 PASS 4 minutes
- 2025-05-09 PASS 4 minutes
- 2025-05-10 PASS 4 minutes
- 2025-05-11

### Error 2025-05-11T00:29:40+00:00
```
2025-05-11T00:29:40.3784760Z === RUN   TestAccCluster_tenant_m5
2025-05-11T00:29:40.3824728Z     shared_resource.go:84: 
2025-05-11T00:29:40.3826727Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.3830105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.3833587Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.3837224Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.3840840Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1060
2025-05-11T00:29:40.3842547Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.3844219Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3845243Z         	Test:       	TestAccCluster_tenant_m5
2025-05-11T00:29:40.3847313Z         	Messages:   	Project creation failed: test-acc-tf-p-131029172891067043, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3848584Z --- FAIL: TestAccCluster_tenant_m5 (0.01s)
```

- 2025-05-12 PASS 4 minutes
- 2025-05-13
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-14
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-15 PASS 4 minutes
- 2025-05-16 PASS 4 minutes
- 2025-05-17 PASS 4 minutes
- 2025-05-18 PASS 4 minutes
- 2025-05-19 PASS 4 minutes
- 2025-05-20 PASS 4 minutes
- 2025-05-21 PASS 4 minutes
- 2025-05-22 PASS 4 minutes
- 2025-05-23 PASS 4 minutes
- 2025-05-24 PASS 4 minutes
- 2025-05-25 PASS 4 minutes
- 2025-05-26 PASS 4 minutes
- 2025-05-27 PASS 4 minutes
- 2025-05-28
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-29
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-30
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-31 PASS 4 minutes
- 2025-06-01
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-06-02
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-06-03 PASS 4 minutes
- 2025-06-04 PASS 4 minutes
- 2025-06-05

### Error 2025-06-05T00:28:48+00:00
```
2025-06-05T00:28:48.8412376Z === RUN   TestAccCluster_tenant_m5
2025-06-05T00:28:48.8424907Z === CONT  TestAccCluster_tenant_m5
2025-06-05T00:31:51.8007587Z === NAME  TestAccCluster_tenant_m5
2025-06-05T00:31:51.8008799Z     resource_cluster_test.go:1063: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:31:51.8009691Z         
2025-06-05T00:31:51.8013349Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4be161ca93c1f0520b9/clusters/test-acc-tf-c-1347019038009368142 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:51.8016354Z         
2025-06-05T00:31:51.8016908Z           with mongodbatlas_cluster.tenant,
2025-06-05T00:31:51.8018004Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "tenant":
2025-06-05T00:31:51.8019020Z           12: 	resource "mongodbatlas_cluster" "tenant" {
2025-06-05T00:31:51.8019534Z         
2025-06-05T00:31:51.8715102Z --- FAIL: TestAccCluster_tenant_m5 (183.03s)
```

- 2025-06-06 PASS 4 minutes
- 2025-06-07 PASS 4 minutes
- 2025-06-08 PASS 4 minutes
- 2025-06-09 PASS 4 minutes
- 2025-06-10 PASS 4 minutes
- 2025-06-11
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-06-12 PASS 4 minutes
- 2025-06-13 PASS 4 minutes
- 2025-06-14 PASS 4 minutes
- 2025-06-15 PASS 4 minutes
- 2025-06-16 PASS 4 minutes
- 2025-06-17 PASS 4 minutes
- 2025-06-18 PASS 4 minutes
- 2025-06-19 PASS 4 minutes
- 2025-06-20 PASS 4 minutes
- 2025-06-21 PASS 4 minutes
- 2025-06-22 PASS 4 minutes
- 2025-06-23 PASS 4 minutes
- 2025-06-24 PASS 4 minutes
- 2025-06-25 PASS 4 minutes
- 2025-06-26 PASS 4 minutes
- 2025-06-27 PASS 4 minutes
- 2025-06-28 PASS 4 minutes
- 2025-06-29 PASS 4 minutes
- 2025-06-30 PASS 4 minutes
- 2025-07-01
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-07-02 PASS 4 minutes
- 2025-07-03 PASS 4 minutes
- 2025-07-04 PASS 4 minutes
- 2025-07-05 PASS 4 minutes
- 2025-07-06 PASS 4 minutes
- 2025-07-07 PASS 4 minutes
- 2025-07-08 PASS 4 minutes
- 2025-07-09 PASS 4 minutes
- 2025-07-10 PASS 9 minutes