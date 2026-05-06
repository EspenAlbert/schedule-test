# ldap/ldapconfiguration/TestAccLDAPConfiguration_withVerify_CACertificateComplete Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:51](#error-2026-04-16t0051040000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032611ec945fedc71c9b6/clusters | dev | out_of_capacity | 8.05s
[2026-04-30 00:57](#error-2026-04-30t0057400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 43 minutes
- 2026-04-08 PASS 17 minutes
- 2026-04-09 PASS 26 minutes
- 2026-04-10 PASS 30 minutes
- 2026-04-11 PASS 16 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 20 minutes
- 2026-04-14 PASS 34 minutes
- 2026-04-15 PASS 20 minutes
- 2026-04-16

### Error 2026-04-16T00:51:04+00:00
```
2026-04-16T00:51:04.5803552Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-04-16T00:51:04.5819788Z   
2026-04-16T00:51:04.5820438Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2026-04-16T00:51:04.5820972Z         
2026-04-16T00:51:04.5821305Z         Error: Error in create
2026-04-16T00:51:04.5821626Z         
2026-04-16T00:51:04.5822064Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T00:51:04.5822898Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T00:51:04.5823682Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T00:51:04.5824112Z         
2026-04-16T00:51:04.5824618Z         cluster name: test-acc-tf-c-7291182956286422411, API error details:
2026-04-16T00:51:04.5825401Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032611ec945fedc71c9b6/clusters
2026-04-16T00:51:04.5826197Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:51:04.5826964Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:51:04.5827790Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:51:04.5828324Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (8.46s)
```

- 2026-04-17 PASS 18 minutes
- 2026-04-18 PASS 26 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 17 minutes
- 2026-04-21 PASS 20 minutes
- 2026-04-22 PASS 53 minutes
- 2026-04-23 PASS 28 minutes
- 2026-04-24 PASS 21 minutes
- 2026-04-25 PASS 16 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 19 minutes
- 2026-04-28 PASS 19 minutes
- 2026-04-29 PASS 19 minutes
- 2026-04-30

### Error 2026-04-30T00:57:40+00:00
```
2026-04-30T00:57:40.4623966Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-04-30T00:57:40.4625417Z     resource_ldap_configuration_test.go:33: Creating execution project (1): test-acc-tf-p-5816448456050662346
2026-04-30T00:57:40.4626625Z     resource_ldap_configuration_test.go:33: 
2026-04-30T00:57:40.4628491Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:57:40.4631912Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T00:57:40.4635546Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T00:57:40.4639209Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-30T00:57:40.4643206Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:33
2026-04-30T00:57:40.4645955Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T00:57:40.4646999Z         	Error:      	Received unexpected error:
2026-04-30T00:57:40.4650733Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:40.4652935Z         	Test:       	TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-04-30T00:57:40.4656667Z         	Messages:   	Project creation failed: test-acc-tf-p-5816448456050662346, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:40.4659062Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (88.18s)
```

- 2026-05-01 PASS 17 minutes
- 2026-05-02 PASS 17 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 20 minutes
- 2026-05-05 PASS 27 minutes
- 2026-05-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 19 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 19 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 16 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 19 minutes
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
- 2026-05-03 PASS 20 minutes
- 2026-05-04 PASS 17 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 19 minutes
