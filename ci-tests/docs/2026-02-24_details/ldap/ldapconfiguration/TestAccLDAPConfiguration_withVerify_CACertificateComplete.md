# ldap/ldapconfiguration/TestAccLDAPConfiguration_withVerify_CACertificateComplete Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 25) FAIL(x 7)
Success rate: 78.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:11](#error-2026-01-31t0311380000) |  | dev | flaky_client | 9353.06s
[2026-02-02 03:39](#error-2026-02-02t0339160000) |  | dev | timeout | 10805.07s
[2026-02-03 00:39](#error-2026-02-03t0039210000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143aee3c7fce2317daa0b/clusters | dev | out_of_capacity | 5.08s
[2026-02-04 03:36](#error-2026-02-04t0336250000) |  | dev | timeout | 10805.09s
[2026-02-05 01:04](#error-2026-02-05t0104310000) |  | dev | flaky_client | 1503.09s
[2026-02-19 00:39](#error-2026-02-19t0039250000) |  | dev |  | 1.08s
[2026-02-24 00:50](#error-2026-02-24t0050580000) |  | dev | flaky_500 | 807.10s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 17 minutes
- 2026-01-27 PASS 20 minutes
- 2026-01-28 PASS 19 minutes
- 2026-01-29 PASS 24 minutes
- 2026-01-30 PASS 22 minutes
- 2026-01-31

### Error 2026-01-31T03:11:38+00:00
```
2026-01-31T03:11:38.8825977Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-01-31T03:11:38.8841454Z    test_terraform_path=/home/runner/work/_temp/cd3dd047-c757-4880-813f-635b01361ee9/terraform test_working_directory=/tmp/plugintest2266131892
2026-01-31T03:11:38.8842489Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2026-01-31T03:11:38.8843021Z         
2026-01-31T03:11:38.8843351Z         Error: Error in create
2026-01-31T03:11:38.8843686Z         
2026-01-31T03:11:38.8844141Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:11:38.8845001Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:11:38.8845816Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:11:38.8846256Z         
2026-01-31T03:11:38.8847089Z         cluster=test-acc-tf-c-337271885183679427 didn't reach desired state: IDLE,
2026-01-31T03:11:38.8847616Z         error: Get
2026-01-31T03:11:38.8848470Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e37ff188f1e45c4182b/clusters/test-acc-tf-c-337271885183679427":
2026-01-31T03:11:38.8849491Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-01-31T03:11:38.8850067Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (9353.59s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:39:16+00:00
```
2026-02-02T03:39:16.6143540Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-02-02T03:39:16.6164128Z   
2026-02-02T03:39:16.6164905Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2026-02-02T03:39:16.6165649Z         
2026-02-02T03:39:16.6166009Z         Error: Error in create
2026-02-02T03:39:16.6166352Z         
2026-02-02T03:39:16.6166826Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-02T03:39:16.6167694Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-02T03:39:16.6168540Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-02T03:39:16.6168981Z         
2026-02-02T03:39:16.6169557Z         cluster=test-acc-tf-c-6281717540480767749 didn't reach desired state: IDLE,
2026-02-02T03:39:16.6170147Z         error: context deadline exceeded
2026-02-02T03:39:16.6170683Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (10805.68s)
```

- 2026-02-03

### Error 2026-02-03T00:39:21+00:00
```
2026-02-03T00:39:21.3754691Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-02-03T00:39:21.3770554Z   
2026-02-03T00:39:21.3771103Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2026-02-03T00:39:21.3771596Z         
2026-02-03T00:39:21.3771914Z         Error: Error in create
2026-02-03T00:39:21.3772225Z         
2026-02-03T00:39:21.3772661Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:39:21.3773421Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:39:21.3774151Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:39:21.3774552Z         
2026-02-03T00:39:21.3775226Z         cluster name: test-acc-tf-c-6415674300904713721, API error details:
2026-02-03T00:39:21.3775949Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143aee3c7fce2317daa0b/clusters
2026-02-03T00:39:21.3776675Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:39:21.3777380Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:39:21.3778335Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:21.3778847Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (5.81s)
```

- 2026-02-04

### Error 2026-02-04T03:36:25+00:00
```
2026-02-04T03:36:25.1556688Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-02-04T03:36:25.1568844Z    test_terraform_path=/home/runner/work/_temp/69f727d3-cade-457a-8bca-e5570cd0c4f5/terraform test_working_directory=/tmp/plugintest832801826 test_step_number=1 test_name=TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-02-04T03:36:25.1570417Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2026-02-04T03:36:25.1570955Z         
2026-02-04T03:36:25.1571288Z         Error: Error in create
2026-02-04T03:36:25.1571605Z         
2026-02-04T03:36:25.1572038Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-04T03:36:25.1573041Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-04T03:36:25.1573861Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-04T03:36:25.1574291Z         
2026-02-04T03:36:25.1574831Z         cluster=test-acc-tf-c-6742249703187738921 didn't reach desired state: IDLE,
2026-02-04T03:36:25.1575404Z         error: context deadline exceeded
2026-02-04T03:36:25.1575915Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (10805.93s)
```

- 2026-02-05

### Error 2026-02-05T01:04:31+00:00
```
2026-02-05T01:04:31.1573890Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-02-05T01:04:31.1597573Z    test_working_directory=/tmp/plugintest3873920447 test_step_number=1 test_name=TestAccLDAPConfiguration_withVerify_CACertificateComplete test_terraform_path=/home/runner/work/_temp/151f0bce-7a12-4a86-ae5c-19e03383fb96/terraform
2026-02-05T01:04:31.1599190Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2026-02-05T01:04:31.1599733Z         
2026-02-05T01:04:31.1600063Z         Error: Error in create
2026-02-05T01:04:31.1600386Z         
2026-02-05T01:04:31.1600823Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-05T01:04:31.1601640Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-05T01:04:31.1602414Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-05T01:04:31.1602839Z         
2026-02-05T01:04:31.1603372Z         cluster=test-acc-tf-c-3681305615359595036 didn't reach desired state: IDLE,
2026-02-05T01:04:31.1604107Z         error: Get
2026-02-05T01:04:31.1604918Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e698304923ebd185087e/clusters/test-acc-tf-c-3681305615359595036":
2026-02-05T01:04:31.1605733Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-02-05T01:04:31.1606294Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1503.88s)
```

- 2026-02-06 PASS 20 minutes
- 2026-02-07 PASS 18 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 24 minutes
- 2026-02-10 PASS 21 minutes
- 2026-02-11 PASS 20 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13 PASS 19 minutes
- 2026-02-14 PASS 20 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 35 minutes
- 2026-02-18 PASS 20 minutes
- 2026-02-19

### Error 2026-02-19T00:39:25+00:00
```
2026-02-19T00:39:25.1537935Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-02-19T00:39:25.1539286Z     resource_ldap_configuration_test.go:33: Creating execution project (1): test-acc-tf-p-8998595558756272035
2026-02-19T00:39:25.1540639Z     resource_ldap_configuration_test.go:33: 
2026-02-19T00:39:25.1542433Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-19T00:39:25.1545543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-02-19T00:39:25.1548666Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-02-19T00:39:25.1551959Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-02-19T00:39:25.1555753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:33
2026-02-19T00:39:25.1558094Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-19T00:39:25.1559005Z         	Error:      	Received unexpected error:
2026-02-19T00:39:25.1561605Z         	            	Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": read tcp 10.1.0.161:46292->3.228.247.77:443: read: connection reset by peer
2026-02-19T00:39:25.1562990Z         	Test:       	TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-02-19T00:39:25.1564368Z         	Messages:   	Project creation failed: test-acc-tf-p-8998595558756272035, err: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": read tcp 10.1.0.161:46292->3.228.247.77:443: read: connection reset by peer
2026-02-19T00:39:25.1565700Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (1.76s)
```

- 2026-02-20 PASS 25 minutes
- 2026-02-21 PASS 21 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T00:50:58+00:00
```
2026-02-24T00:50:58.6346042Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2026-02-24T00:50:58.6357388Z   
2026-02-24T00:50:58.6357933Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2026-02-24T00:50:58.6358440Z         
2026-02-24T00:50:58.6358830Z         Error: error reading Advanced Configuration
2026-02-24T00:50:58.6359202Z         
2026-02-24T00:50:58.6359624Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-24T00:50:58.6360392Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-24T00:50:58.6361121Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-24T00:50:58.6361532Z         
2026-02-24T00:50:58.6362013Z         cluster name: test-acc-tf-c-6981697836052166694, API error details: (503
2026-02-24T00:50:58.6362714Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:50:58.6363680Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (807.97s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 21 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 19 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 21 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 16 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 20 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
