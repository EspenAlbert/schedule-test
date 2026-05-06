# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveUnsetToSet Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:43](#error-2026-04-11t0043450000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-04-16 00:51](#error-2026-04-16t0051150000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0326c8379397d109cbc5b/clusters | dev | out_of_capacity | 5.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 49 minutes
- 2026-04-08 PASS 16 minutes
- 2026-04-09 PASS 24 minutes
- 2026-04-10 PASS 24 minutes
- 2026-04-11

### Error 2026-04-11T00:43:45+00:00
```
2026-04-11T00:43:45.8012861Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-04-11T00:44:48.0330700Z     shared_resource.go:160: 
2026-04-11T00:44:48.0334112Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:44:48.0342779Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-11T00:44:48.0345600Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-11T00:44:48.0348908Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-11T00:44:48.0354357Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-11T00:44:48.0359880Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-04-11T00:44:48.0363910Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:33
2026-04-11T00:44:48.0365626Z         	Error:      	Received unexpected error:
2026-04-11T00:44:48.0369111Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:44:48.0371310Z         	Test:       	TestAccAdvancedCluster_effectiveUnsetToSet
2026-04-11T00:44:48.0373413Z         	Messages:   	Project creation failed: test-acc-tf-p-1769769403722206698, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:44:48.0374898Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (62.23s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 18 minutes
- 2026-04-14 PASS 17 minutes
- 2026-04-15 PASS 19 minutes
- 2026-04-16

### Error 2026-04-16T00:51:15+00:00
```
2026-04-16T00:51:15.7566004Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-04-16T00:54:54.7141971Z === CONT  TestAccAdvancedCluster_effectiveUnsetToSet
2026-04-16T00:54:55.7486397Z   diagnostic_detail=
2026-04-16T00:54:55.7820229Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.11 tf_resource_type=mongodbatlas_advanced_cluster diagnostic_severity=ERROR diagnostic_attribute="AttributeName(\"replication_specs\").ElementKeyInt(0).AttributeName(\"region_configs\")" tf_req_id=a91b5e8a-c087-3c1a-0161-216976c263a5 tf_rpc=ValidateResourceConfig diagnostic_summary="Missing Configuration for Required Attribute"
2026-04-16T00:54:58.7836186Z    test_name=TestAccAdvancedCluster_moveBasic test_terraform_path=/home/runner/work/_temp/b00f7911-dfb1-455b-abe5-62efc714635b/terraform test_working_directory=/tmp/plugintest4001729756
2026-04-16T00:54:59.4066359Z === NAME  TestAccAdvancedCluster_effectiveUnsetToSet
2026-04-16T00:54:59.4114846Z     effective_fields_test.go:36: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:54:59.4138882Z         
2026-04-16T00:54:59.4140045Z         Error: Error in create
2026-04-16T00:54:59.4140628Z         
2026-04-16T00:54:59.4141577Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.4153618Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.4162343Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.4163267Z         
2026-04-16T00:54:59.4164478Z         cluster name: test-acc-tf-c-1338253928872412399, API error details:
2026-04-16T00:54:59.4165992Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0326c8379397d109cbc5b/clusters
2026-04-16T00:54:59.4167773Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.4169115Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.4170218Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.5584708Z   
2026-04-16T00:54:59.7842897Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (5.67s)
```

- 2026-04-17 PASS 17 minutes
- 2026-04-18 PASS 33 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 21 minutes
- 2026-04-22 PASS 39 minutes
- 2026-04-23 PASS 33 minutes
- 2026-04-24 PASS 18 minutes
- 2026-04-25 PASS 20 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 15 minutes
- 2026-04-28 PASS 18 minutes
- 2026-04-29 PASS 18 minutes
- 2026-04-30 PASS 23 minutes
- 2026-05-01 PASS 17 minutes
- 2026-05-02 PASS 17 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 20 minutes
- 2026-05-05 PASS 40 minutes
- 2026-05-06 PASS 22 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 18 minutes
  - PASS 14 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 15 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 18 minutes
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
- 2026-05-03 PASS 19 minutes
- 2026-05-04 PASS 18 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 17 minutes
