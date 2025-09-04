# advanced_cluster_tpf/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 23) FAIL(x 13)
Success rate: 63.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-06 02:05](#error-2025-08-06t0205370000) |  | dev | real_test_failure | 66.04s
[2025-08-09 01:40](#error-2025-08-09t0140120000) |  | dev |  | 66.06s
[2025-08-12 09:08](#error-2025-08-12t0908190000) |  | dev |  | 56.06s
[2025-08-17 01:54](#error-2025-08-17t0154470000) |  | qa |  | 41.06s
[2025-08-20 01:34](#error-2025-08-20t0134330000) |  | dev |  | 62.03s
[2025-08-21 05:27](#error-2025-08-21t0527020000) |  | dev |  | 36.08s
[2025-08-24 03:34](#error-2025-08-24t0334470000) |  | qa |  | 3998.03s
[2025-08-27 01:38](#error-2025-08-27t0138030000) |  | dev | flaky_check | 2599.08s
[2025-08-28 03:36](#error-2025-08-28t0336120000) |  | dev |  | 3205.01s
[2025-08-30 03:28](#error-2025-08-30t0328110000) |  | dev |  | 2315.04s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2025-09-01 13:30](#error-2025-09-01t1330550000) |  | dev |  | 2287.01s
[2025-09-02 01:38](#error-2025-09-02t0138030000) |  | dev |  | 2395.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06

### Error 2025-08-06T02:05:37+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-08-06T02:05:37.429000+00:00-TestAccMockableAdvancedCluster_tenantUpgrade',confidence=1.0,ts_when='28 days ago')

```
2025-08-06T02:05:37.4297465Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-06T02:05:37.4298187Z     resource_advanced_cluster_test.go:168: Adding variable groupId=6892a24beb5d0951971651f5
2025-08-06T02:05:37.4298914Z     resource_advanced_cluster_test.go:168: Adding variable clusterName=test-acc-tf-c-772520579618579551
2025-08-06T02:05:37.4387210Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-06T02:05:37.4464209Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-06T02:05:37.4465050Z     pre_check.go:40: Time before creating cluster: 2025-08-06T00:34:02.22795408Z, ProjectID: 6892a24beb5d0951971651f5, Cluster name: test-acc-tf-c-772520579618579551
2025-08-06T02:05:37.4479610Z   
2025-08-06T02:05:37.4480051Z     resource_advanced_cluster_test.go:168: Step 1/3 error: Error running apply: exit status 1
2025-08-06T02:05:37.4480577Z         
2025-08-06T02:05:37.4480825Z         Error: Error in create
2025-08-06T02:05:37.4481067Z         
2025-08-06T02:05:37.4481396Z           with mongodbatlas_advanced_cluster.test,
2025-08-06T02:05:37.4482043Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-06T02:05:37.4482636Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-06T02:05:37.4482939Z         
2025-08-06T02:05:37.4483341Z         cluster name: test-acc-tf-c-772520579618579551, API error details:
2025-08-06T02:05:37.4484303Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6892a24beb5d0951971651f5/clusters
2025-08-06T02:05:37.4484843Z         POST: HTTP 400 Bad Request (Error code:
2025-08-06T02:05:37.4485389Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-06T02:05:37.4486028Z         with instance size M0 via the public api: This project has reached the limit
2025-08-06T02:05:37.4486662Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-06T02:05:37.4487294Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-06T02:05:37.4487762Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (66.37s)
```

- 2025-08-07 PASS an hour
- 2025-08-08 PASS 35 minutes
- 2025-08-09

### Error 2025-08-09T01:40:12+00:00
```
2025-08-09T01:40:12.0180873Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-09T01:40:12.0181563Z     resource_advanced_cluster_test.go:168: Adding variable groupId=6896963918106a5d9025b7f2
2025-08-09T01:40:12.0182266Z     resource_advanced_cluster_test.go:168: Adding variable clusterName=test-acc-tf-c-5744859381460651160
2025-08-09T01:40:12.0253445Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-09T01:40:12.0310032Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-09T01:40:12.0310850Z     pre_check.go:40: Time before creating cluster: 2025-08-09T00:31:22.966117519Z, ProjectID: 6896963918106a5d9025b7f2, Cluster name: test-acc-tf-c-5744859381460651160
2025-08-09T01:40:12.0324649Z    test_name=TestAccMockableAdvancedCluster_tenantUpgrade test_terraform_path=/home/runner/work/_temp/de3d291b-f98d-45e0-ab65-a614d3a1c5ef/terraform test_working_directory=/tmp/plugintest641696373 test_step_number=1
2025-08-09T01:40:12.0325749Z     resource_advanced_cluster_test.go:168: Step 1/3 error: Error running apply: exit status 1
2025-08-09T01:40:12.0326157Z         
2025-08-09T01:40:12.0326400Z         Error: Error in create
2025-08-09T01:40:12.0326636Z         
2025-08-09T01:40:12.0326949Z           with mongodbatlas_advanced_cluster.test,
2025-08-09T01:40:12.0327573Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-09T01:40:12.0328157Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-09T01:40:12.0328463Z         
2025-08-09T01:40:12.0328860Z         cluster name: test-acc-tf-c-5744859381460651160, API error details:
2025-08-09T01:40:12.0329507Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6896963918106a5d9025b7f2/clusters
2025-08-09T01:40:12.0330011Z         POST: HTTP 400 Bad Request (Error code:
2025-08-09T01:40:12.0330539Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-09T01:40:12.0331152Z         with instance size M0 via the public api: This project has reached the limit
2025-08-09T01:40:12.0331752Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-09T01:40:12.0332353Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-09T01:40:12.0332811Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (66.60s)
```

- 2025-08-10 PASS 27 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 33 minutes
  - FAIL 56 seconds

### Error 2025-08-12T09:08:19+00:00
```
2025-08-12T09:08:19.9552432Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-12T09:08:19.9553605Z     resource_advanced_cluster_test.go:168: Adding variable groupId=689af63463141409ee3d81d9
2025-08-12T09:08:19.9555074Z     resource_advanced_cluster_test.go:168: Adding variable clusterName=test-acc-tf-c-1105111661689743207
2025-08-12T09:08:19.9624358Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-12T09:08:19.9686287Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-12T09:08:19.9687134Z     pre_check.go:40: Time before creating cluster: 2025-08-12T08:10:21.311242287Z, ProjectID: 689af63463141409ee3d81d9, Cluster name: test-acc-tf-c-1105111661689743207
2025-08-12T09:08:19.9701133Z    test_name=TestAccMockableAdvancedCluster_tenantUpgrade test_terraform_path=/home/runner/work/_temp/40c0b3ed-b80c-4451-ad0b-01f03ae5eb13/terraform test_working_directory=/tmp/plugintest3552976777 test_step_number=1
2025-08-12T09:08:19.9702260Z     resource_advanced_cluster_test.go:168: Step 1/3 error: Error running apply: exit status 1
2025-08-12T09:08:19.9702870Z         
2025-08-12T09:08:19.9703154Z         Error: Error in create
2025-08-12T09:08:19.9703516Z         
2025-08-12T09:08:19.9703863Z           with mongodbatlas_advanced_cluster.test,
2025-08-12T09:08:19.9704534Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-12T09:08:19.9705137Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-12T09:08:19.9705460Z         
2025-08-12T09:08:19.9705879Z         cluster name: test-acc-tf-c-1105111661689743207, API error details:
2025-08-12T09:08:19.9706672Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/689af63463141409ee3d81d9/clusters
2025-08-12T09:08:19.9707207Z         POST: HTTP 400 Bad Request (Error code:
2025-08-12T09:08:19.9707762Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-12T09:08:19.9708405Z         with instance size M0 via the public api: This project has reached the limit
2025-08-12T09:08:19.9709047Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-12T09:08:19.9709682Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-12T09:08:19.9710160Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (56.56s)
```

- 2025-08-13 PASS 24 minutes
- 2025-08-14 PASS 40 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 46 minutes
- 2025-08-17

### Error 2025-08-17T01:54:47+00:00
```
2025-08-17T01:54:47.5269863Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-17T01:54:47.5271047Z     resource_advanced_cluster_test.go:168: Adding variable groupId=68a122e0aafa9a76ca8bc966
2025-08-17T01:54:47.5272280Z     resource_advanced_cluster_test.go:168: Adding variable clusterName=test-acc-tf-c-718603170639381683
2025-08-17T01:54:47.5353885Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-17T01:54:47.5409714Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-17T01:54:47.5410535Z     pre_check.go:40: Time before creating cluster: 2025-08-17T00:33:58.183680341Z, ProjectID: 68a122e0aafa9a76ca8bc966, Cluster name: test-acc-tf-c-718603170639381683
2025-08-17T01:54:47.5424891Z   
2025-08-17T01:54:47.5425330Z     resource_advanced_cluster_test.go:168: Step 1/3 error: Error running apply: exit status 1
2025-08-17T01:54:47.5425743Z         
2025-08-17T01:54:47.5425983Z         Error: Error in create
2025-08-17T01:54:47.5426220Z         
2025-08-17T01:54:47.5426528Z           with mongodbatlas_advanced_cluster.test,
2025-08-17T01:54:47.5427151Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-17T01:54:47.5427720Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-17T01:54:47.5428142Z         
2025-08-17T01:54:47.5428534Z         cluster name: test-acc-tf-c-718603170639381683, API error details:
2025-08-17T01:54:47.5429175Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122e0aafa9a76ca8bc966/clusters
2025-08-17T01:54:47.5429680Z         POST: HTTP 400 Bad Request (Error code:
2025-08-17T01:54:47.5430204Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-17T01:54:47.5431124Z         with instance size M0 via the public api: This project has reached the limit
2025-08-17T01:54:47.5431754Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-17T01:54:47.5432358Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-17T01:54:47.5432813Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (41.63s)
```

- 2025-08-18 PASS 26 minutes
- 2025-08-19 PASS 25 minutes
- 2025-08-20
  - FAIL a minute

### Error 2025-08-20T01:34:33+00:00
```
2025-08-20T01:34:33.2696159Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-20T01:34:33.2697145Z     resource_advanced_cluster_test.go:168: Adding variable groupId=68a516698c0d724731cbbc99
2025-08-20T01:34:33.2697881Z     resource_advanced_cluster_test.go:168: Adding variable clusterName=test-acc-tf-c-4368409090723498676
2025-08-20T01:34:33.2767951Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-20T01:34:33.2871990Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-20T01:34:33.2872813Z     pre_check.go:40: Time before creating cluster: 2025-08-20T00:30:33.292902999Z, ProjectID: 68a516698c0d724731cbbc99, Cluster name: test-acc-tf-c-4368409090723498676
2025-08-20T01:34:33.2886843Z   
2025-08-20T01:34:33.2887277Z     resource_advanced_cluster_test.go:168: Step 1/3 error: Error running apply: exit status 1
2025-08-20T01:34:33.2887681Z         
2025-08-20T01:34:33.2887921Z         Error: Error in create
2025-08-20T01:34:33.2888156Z         
2025-08-20T01:34:33.2888473Z           with mongodbatlas_advanced_cluster.test,
2025-08-20T01:34:33.2889236Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-20T01:34:33.2889817Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-20T01:34:33.2890198Z         
2025-08-20T01:34:33.2890597Z         cluster name: test-acc-tf-c-4368409090723498676, API error details:
2025-08-20T01:34:33.2891438Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a516698c0d724731cbbc99/clusters
2025-08-20T01:34:33.2892331Z         POST: HTTP 400 Bad Request (Error code:
2025-08-20T01:34:33.2893007Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-20T01:34:33.2893623Z         with instance size M0 via the public api: This project has reached the limit
2025-08-20T01:34:33.2894235Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-20T01:34:33.2894837Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-20T01:34:33.2895459Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (62.28s)
```

  - PASS 29 minutes
- 2025-08-21

### Error 2025-08-21T05:27:02+00:00
```
2025-08-21T05:27:02.5594638Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-21T05:27:02.5595410Z     resource_advanced_cluster_test.go:168: Adding variable clusterName=test-acc-tf-c-32018974457947425
2025-08-21T05:27:02.5596093Z     resource_advanced_cluster_test.go:168: Adding variable groupId=68a667d92e1df52cf3cd975a
2025-08-21T05:27:02.5662116Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-21T05:27:02.5715131Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-21T05:27:02.5715958Z     pre_check.go:40: Time before creating cluster: 2025-08-21T00:29:27.688272373Z, ProjectID: 68a667d92e1df52cf3cd975a, Cluster name: test-acc-tf-c-32018974457947425
2025-08-21T05:27:02.5729897Z    test_name=TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-21T05:27:02.5730476Z     resource_advanced_cluster_test.go:168: Step 1/3 error: Error running apply: exit status 1
2025-08-21T05:27:02.5730883Z         
2025-08-21T05:27:02.5731125Z         Error: Error in create
2025-08-21T05:27:02.5731361Z         
2025-08-21T05:27:02.5731675Z           with mongodbatlas_advanced_cluster.test,
2025-08-21T05:27:02.5732310Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-21T05:27:02.5732887Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-21T05:27:02.5733187Z         
2025-08-21T05:27:02.5733579Z         cluster name: test-acc-tf-c-32018974457947425, API error details:
2025-08-21T05:27:02.5734393Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a667d92e1df52cf3cd975a/clusters
2025-08-21T05:27:02.5734940Z         POST: HTTP 400 Bad Request (Error code:
2025-08-21T05:27:02.5735470Z         "CANNOT_CREATE_FREE_CLUSTER_VIA_PUBLIC_API") Detail: Cannot create a cluster
2025-08-21T05:27:02.5736093Z         with instance size M0 via the public api: This project has reached the limit
2025-08-21T05:27:02.5736702Z         for the number of free clusters. Reason: Bad Request. Params: [This project
2025-08-21T05:27:02.5737532Z         has reached the limit for the number of free clusters], BadRequestDetail: 
2025-08-21T05:27:02.5737994Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (36.77s)
```

- 2025-08-22: MISSING
- 2025-08-23 PASS 31 minutes
- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1351988Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-24T03:34:47.1353282Z     resource_advanced_cluster_test.go:169: Adding variable clusterName=test-acc-tf-c-4015937028551549239
2025-08-24T03:34:47.1354592Z     resource_advanced_cluster_test.go:169: Adding variable groupId=68aa5d429bbb8c4ee1f83acc
2025-08-24T03:34:47.1481442Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-24T03:34:47.1790168Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-24T03:34:47.1790987Z     pre_check.go:40: Time before creating cluster: 2025-08-24T00:33:18.076604642Z, ProjectID: 68aa5d429bbb8c4ee1f83acc, Cluster name: test-acc-tf-c-4015937028551549239
2025-08-24T03:34:47.1801552Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-24T03:34:47.1802201Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-9030453425920892538
2025-08-24T03:34:47.1803011Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-8772155813562582803
2025-08-24T03:34:47.1803812Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-4291877186808713554
2025-08-24T03:34:47.1804614Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-8090950587800501085
2025-08-24T03:34:47.1805412Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-2019772949352251039
2025-08-24T03:34:47.1883761Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-24T03:34:47.1884330Z     resource_advanced_cluster_test.go:169: Step 2/3 error: Error running apply: exit status 1
2025-08-24T03:34:47.1884737Z         
2025-08-24T03:34:47.1885099Z         Error: Provider produced inconsistent result after apply
2025-08-24T03:34:47.1885415Z         
2025-08-24T03:34:47.1885944Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-24T03:34:47.1886553Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-24T03:34:47.1887179Z         unexpected new value: .replication_specs[0].region_configs[0].provider_name:
2025-08-24T03:34:47.1887731Z         was cty.StringVal("AWS"), but now cty.StringVal("TENANT").
2025-08-24T03:34:47.1888043Z         
2025-08-24T03:34:47.1888678Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-24T03:34:47.1889075Z         issue tracker.
2025-08-24T03:34:47.1889299Z         
2025-08-24T03:34:47.1889656Z         Error: Provider produced inconsistent result after apply
2025-08-24T03:34:47.1889974Z         
2025-08-24T03:34:47.1890383Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-24T03:34:47.1891114Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-24T03:34:47.1891529Z         unexpected new value:
2025-08-24T03:34:47.1892024Z         .replication_specs[0].region_configs[0].backing_provider_name: was null, but
2025-08-24T03:34:47.1892455Z         now cty.StringVal("AWS").
2025-08-24T03:34:47.1892696Z         
2025-08-24T03:34:47.1893121Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-24T03:34:47.1893508Z         issue tracker.
2025-08-24T03:34:47.1893718Z         
2025-08-24T03:34:47.1894069Z         Error: Provider produced inconsistent result after apply
2025-08-24T03:34:47.1894379Z         
2025-08-24T03:34:47.1894786Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-24T03:34:47.1895387Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-24T03:34:47.1895796Z         unexpected new value:
2025-08-24T03:34:47.1896280Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-08-24T03:34:47.1896784Z         cty.StringVal("M10"), but now cty.StringVal("M0").
2025-08-24T03:34:47.1897080Z         
2025-08-24T03:34:47.1897509Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-24T03:34:47.1897895Z         issue tracker.
2025-08-24T03:34:47.1898102Z         
2025-08-24T03:34:47.1898664Z         Error: Provider produced inconsistent result after apply
2025-08-24T03:34:47.1898982Z         
2025-08-24T03:34:47.1899388Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-24T03:34:47.1899985Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-24T03:34:47.1900394Z         unexpected new value:
2025-08-24T03:34:47.1900869Z         .replication_specs[0].region_configs[0].electable_specs.node_count: was
2025-08-24T03:34:47.1901307Z         cty.NumberIntVal(3), but now null.
2025-08-24T03:34:47.1901575Z         
2025-08-24T03:34:47.1901998Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-24T03:34:47.1902387Z         issue tracker.
2025-08-24T03:34:47.1902702Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (3998.29s)
```

- 2025-08-25 PASS 25 minutes
- 2025-08-26 PASS 30 minutes
- 2025-08-27

### Error 2025-08-27T01:38:03+00:00
GoTestErrorClassification(error_class='flaky_check',author='human',run_id='2025-08-27T01:38:03.937000+00:00-TestAccMockableAdvancedCluster_tenantUpgrade',confidence=1.0,ts_when='8 days ago')

```
2025-08-27T01:38:03.9372113Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-27T01:38:03.9372954Z     resource_advanced_cluster_test.go:169: Adding variable groupId=68ae50f8aa49ce49aab8711e
2025-08-27T01:38:03.9373823Z     resource_advanced_cluster_test.go:169: Adding variable clusterName=test-acc-tf-c-3109321951452323103
2025-08-27T01:38:03.9455219Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-27T01:38:03.9605964Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-27T01:38:03.9606787Z     pre_check.go:40: Time before creating cluster: 2025-08-27T00:29:29.75489767Z, ProjectID: 68ae50f8aa49ce49aab8711e, Cluster name: test-acc-tf-c-3109321951452323103
2025-08-27T01:38:03.9620143Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-27T01:38:03.9620795Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-3026030926106981520
2025-08-27T01:38:03.9621733Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-3363337209279304458
2025-08-27T01:38:03.9622535Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-2019600078336480976
2025-08-27T01:38:03.9714493Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-27T01:38:03.9715048Z     resource_advanced_cluster_test.go:169: Step 2/3 error: Error running apply: exit status 1
2025-08-27T01:38:03.9715444Z         
2025-08-27T01:38:03.9715808Z         Error: Provider produced inconsistent result after apply
2025-08-27T01:38:03.9716135Z         
2025-08-27T01:38:03.9716546Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-27T01:38:03.9717149Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-27T01:38:03.9717770Z         unexpected new value: .replication_specs[0].region_configs[0].provider_name:
2025-08-27T01:38:03.9718313Z         was cty.StringVal("AWS"), but now cty.StringVal("TENANT").
2025-08-27T01:38:03.9718622Z         
2025-08-27T01:38:03.9719056Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-27T01:38:03.9719441Z         issue tracker.
2025-08-27T01:38:03.9719644Z         
2025-08-27T01:38:03.9720000Z         Error: Provider produced inconsistent result after apply
2025-08-27T01:38:03.9720304Z         
2025-08-27T01:38:03.9720712Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-27T01:38:03.9721653Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-27T01:38:03.9722085Z         unexpected new value:
2025-08-27T01:38:03.9722567Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-08-27T01:38:03.9723068Z         cty.StringVal("M10"), but now cty.StringVal("M0").
2025-08-27T01:38:03.9723356Z         
2025-08-27T01:38:03.9723783Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-27T01:38:03.9724165Z         issue tracker.
2025-08-27T01:38:03.9724368Z         
2025-08-27T01:38:03.9724716Z         Error: Provider produced inconsistent result after apply
2025-08-27T01:38:03.9725020Z         
2025-08-27T01:38:03.9725430Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-27T01:38:03.9726026Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-27T01:38:03.9726433Z         unexpected new value:
2025-08-27T01:38:03.9726904Z         .replication_specs[0].region_configs[0].electable_specs.node_count: was
2025-08-27T01:38:03.9727459Z         cty.NumberIntVal(3), but now null.
2025-08-27T01:38:03.9727714Z         
2025-08-27T01:38:03.9728143Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-27T01:38:03.9728527Z         issue tracker.
2025-08-27T01:38:03.9728732Z         
2025-08-27T01:38:03.9729080Z         Error: Provider produced inconsistent result after apply
2025-08-27T01:38:03.9729387Z         
2025-08-27T01:38:03.9729792Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-27T01:38:03.9730385Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-27T01:38:03.9730796Z         unexpected new value:
2025-08-27T01:38:03.9731394Z         .replication_specs[0].region_configs[0].backing_provider_name: was null, but
2025-08-27T01:38:03.9731819Z         now cty.StringVal("AWS").
2025-08-27T01:38:03.9732058Z         
2025-08-27T01:38:03.9732485Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-27T01:38:03.9732871Z         issue tracker.
2025-08-27T01:38:03.9733753Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (2599.76s)
```

- 2025-08-28

### Error 2025-08-28T03:36:12+00:00
```
2025-08-28T03:36:12.1363065Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-28T03:36:12.1363827Z     resource_advanced_cluster_test.go:169: Adding variable clusterName=test-acc-tf-c-6363703023397031496
2025-08-28T03:36:12.1364524Z     resource_advanced_cluster_test.go:169: Adding variable groupId=68afa282e2173c2b10938283
2025-08-28T03:36:12.1432067Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-28T03:36:12.1536211Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-28T03:36:12.1537133Z     pre_check.go:40: Time before creating cluster: 2025-08-28T00:30:40.627090862Z, ProjectID: 68afa282e2173c2b10938283, Cluster name: test-acc-tf-c-6363703023397031496
2025-08-28T03:36:12.1541459Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-28T03:36:12.1542110Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-5813029858168051405
2025-08-28T03:36:12.1542926Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-5898238972244935475
2025-08-28T03:36:12.1543735Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-811951682985063817
2025-08-28T03:36:12.1544552Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-7223462834210867485
2025-08-28T03:36:12.1545360Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-4231498613672668805
2025-08-28T03:36:12.1629627Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-28T03:36:12.1630187Z     resource_advanced_cluster_test.go:169: Step 2/3 error: Error running apply: exit status 1
2025-08-28T03:36:12.1630596Z         
2025-08-28T03:36:12.1630983Z         Error: Provider produced inconsistent result after apply
2025-08-28T03:36:12.1631321Z         
2025-08-28T03:36:12.1631746Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-28T03:36:12.1632362Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-28T03:36:12.1633001Z         unexpected new value: .replication_specs[0].region_configs[0].provider_name:
2025-08-28T03:36:12.1633553Z         was cty.StringVal("AWS"), but now cty.StringVal("TENANT").
2025-08-28T03:36:12.1633865Z         
2025-08-28T03:36:12.1634306Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-28T03:36:12.1634698Z         issue tracker.
2025-08-28T03:36:12.1634906Z         
2025-08-28T03:36:12.1635265Z         Error: Provider produced inconsistent result after apply
2025-08-28T03:36:12.1635574Z         
2025-08-28T03:36:12.1636002Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-28T03:36:12.1636776Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-28T03:36:12.1637237Z         unexpected new value:
2025-08-28T03:36:12.1637741Z         .replication_specs[0].region_configs[0].backing_provider_name: was null, but
2025-08-28T03:36:12.1638174Z         now cty.StringVal("AWS").
2025-08-28T03:36:12.1638415Z         
2025-08-28T03:36:12.1638850Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-28T03:36:12.1639238Z         issue tracker.
2025-08-28T03:36:12.1639444Z         
2025-08-28T03:36:12.1639802Z         Error: Provider produced inconsistent result after apply
2025-08-28T03:36:12.1640110Z         
2025-08-28T03:36:12.1640525Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-28T03:36:12.1641133Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-28T03:36:12.1641555Z         unexpected new value:
2025-08-28T03:36:12.1642035Z         .replication_specs[0].region_configs[0].electable_specs.node_count: was
2025-08-28T03:36:12.1642481Z         cty.NumberIntVal(3), but now null.
2025-08-28T03:36:12.1642746Z         
2025-08-28T03:36:12.1643305Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-28T03:36:12.1643702Z         issue tracker.
2025-08-28T03:36:12.1643908Z         
2025-08-28T03:36:12.1644264Z         Error: Provider produced inconsistent result after apply
2025-08-28T03:36:12.1644572Z         
2025-08-28T03:36:12.1644988Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-28T03:36:12.1645597Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-28T03:36:12.1646008Z         unexpected new value:
2025-08-28T03:36:12.1646500Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-08-28T03:36:12.1647208Z         cty.StringVal("M10"), but now cty.StringVal("M0").
2025-08-28T03:36:12.1647502Z         
2025-08-28T03:36:12.1647936Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-28T03:36:12.1648446Z         issue tracker.
2025-08-28T03:36:12.1648758Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (3205.10s)
```

- 2025-08-29: MISSING
- 2025-08-30

### Error 2025-08-30T03:28:11+00:00
```
2025-08-30T03:28:11.7829144Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-30T03:28:11.7830339Z     resource_advanced_cluster_test.go:169: Adding variable groupId=68b2452787c22161ee8e66b6
2025-08-30T03:28:11.7831630Z     resource_advanced_cluster_test.go:169: Adding variable clusterName=test-acc-tf-c-3565543610283822208
2025-08-30T03:28:11.7960757Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-30T03:28:11.8096684Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-30T03:28:11.8098210Z     pre_check.go:40: Time before creating cluster: 2025-08-30T00:29:11.859867476Z, ProjectID: 68b2452787c22161ee8e66b6, Cluster name: test-acc-tf-c-3565543610283822208
2025-08-30T03:28:11.8102163Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-30T03:28:11.8103509Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-6873629845791126462
2025-08-30T03:28:11.8105026Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-9131845137080460053
2025-08-30T03:28:11.8106510Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-5922406172245908485
2025-08-30T03:28:11.8107952Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-617690970154086788
2025-08-30T03:28:11.8109516Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-4510286890268893990
2025-08-30T03:28:11.8228079Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-08-30T03:28:11.8228648Z     resource_advanced_cluster_test.go:169: Step 2/3 error: Error running apply: exit status 1
2025-08-30T03:28:11.8229224Z         
2025-08-30T03:28:11.8229587Z         Error: Provider produced inconsistent result after apply
2025-08-30T03:28:11.8229898Z         
2025-08-30T03:28:11.8230313Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-30T03:28:11.8230909Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-30T03:28:11.8231318Z         unexpected new value:
2025-08-30T03:28:11.8231809Z         .replication_specs[0].region_configs[0].backing_provider_name: was null, but
2025-08-30T03:28:11.8232246Z         now cty.StringVal("AWS").
2025-08-30T03:28:11.8232487Z         
2025-08-30T03:28:11.8232958Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-30T03:28:11.8233344Z         issue tracker.
2025-08-30T03:28:11.8233546Z         
2025-08-30T03:28:11.8233899Z         Error: Provider produced inconsistent result after apply
2025-08-30T03:28:11.8234202Z         
2025-08-30T03:28:11.8234608Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-30T03:28:11.8235202Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-30T03:28:11.8235818Z         unexpected new value: .replication_specs[0].region_configs[0].provider_name:
2025-08-30T03:28:11.8236360Z         was cty.StringVal("AWS"), but now cty.StringVal("TENANT").
2025-08-30T03:28:11.8236663Z         
2025-08-30T03:28:11.8237083Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-30T03:28:11.8237466Z         issue tracker.
2025-08-30T03:28:11.8237667Z         
2025-08-30T03:28:11.8238012Z         Error: Provider produced inconsistent result after apply
2025-08-30T03:28:11.8238447Z         
2025-08-30T03:28:11.8238855Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-30T03:28:11.8239624Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-30T03:28:11.8240031Z         unexpected new value:
2025-08-30T03:28:11.8240520Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-08-30T03:28:11.8241027Z         cty.StringVal("M10"), but now cty.StringVal("M0").
2025-08-30T03:28:11.8241318Z         
2025-08-30T03:28:11.8241749Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-30T03:28:11.8242138Z         issue tracker.
2025-08-30T03:28:11.8242349Z         
2025-08-30T03:28:11.8242700Z         Error: Provider produced inconsistent result after apply
2025-08-30T03:28:11.8243137Z         
2025-08-30T03:28:11.8243550Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-08-30T03:28:11.8244153Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-08-30T03:28:11.8244566Z         unexpected new value:
2025-08-30T03:28:11.8245042Z         .replication_specs[0].region_configs[0].electable_specs.node_count: was
2025-08-30T03:28:11.8245477Z         cty.NumberIntVal(3), but now null.
2025-08-30T03:28:11.8245730Z         
2025-08-30T03:28:11.8246157Z         This is a bug in the provider, which should be reported in the provider's own
2025-08-30T03:28:11.8246540Z         issue tracker.
2025-08-30T03:28:11.8248005Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (2315.43s)
```

- 2025-08-31 PASS 27 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.6813062Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-01T00:30:49.6813657Z     shared_resource.go:93: 
2025-09-01T00:30:49.6815166Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.6818462Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.6821745Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.6824786Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.6828298Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:166
2025-09-01T00:30:49.6830437Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:49.6831542Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.6836385Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6838645Z         	Test:       	TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-01T00:30:49.6842693Z         	Messages:   	Project creation failed: test-acc-tf-p-5034021903032224615, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.6845107Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (0.18s)
```

  - PASS an hour
  - PASS an hour
  - PASS 30 minutes
  - FAIL 38 minutes

### Error 2025-09-01T13:30:55+00:00
```
2025-09-01T13:30:55.1344908Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-01T13:30:55.1345675Z     resource_advanced_cluster_test.go:169: Adding variable groupId=68b5902c43a482152d60c206
2025-09-01T13:30:55.1346448Z     resource_advanced_cluster_test.go:169: Adding variable clusterName=test-acc-tf-c-6114110295186819751
2025-09-01T13:30:55.1406645Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-01T13:30:55.1456748Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-01T13:30:55.1457679Z     pre_check.go:40: Time before creating cluster: 2025-09-01T12:25:42.897140606Z, ProjectID: 68b5902c43a482152d60c206, Cluster name: test-acc-tf-c-6114110295186819751
2025-09-01T13:30:55.1475434Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-01T13:30:55.1476083Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-6448358980381732538
2025-09-01T13:30:55.1476893Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-1082695427707508849
2025-09-01T13:30:55.1477833Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-5076143620997481344
2025-09-01T13:30:55.1478758Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-3582415938313214781
2025-09-01T13:30:55.1479570Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-2326130327606828161
2025-09-01T13:30:55.1548569Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-01T13:30:55.1549130Z     resource_advanced_cluster_test.go:169: Step 2/3 error: Error running apply: exit status 1
2025-09-01T13:30:55.1549542Z         
2025-09-01T13:30:55.1549909Z         Error: Provider produced inconsistent result after apply
2025-09-01T13:30:55.1550226Z         
2025-09-01T13:30:55.1550641Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-01T13:30:55.1551244Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-01T13:30:55.1551654Z         unexpected new value:
2025-09-01T13:30:55.1552150Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-09-01T13:30:55.1552792Z         cty.StringVal("M10"), but now cty.StringVal("M0").
2025-09-01T13:30:55.1553081Z         
2025-09-01T13:30:55.1553513Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-01T13:30:55.1553903Z         issue tracker.
2025-09-01T13:30:55.1554112Z         
2025-09-01T13:30:55.1554467Z         Error: Provider produced inconsistent result after apply
2025-09-01T13:30:55.1554776Z         
2025-09-01T13:30:55.1555187Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-01T13:30:55.1555790Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-01T13:30:55.1556198Z         unexpected new value:
2025-09-01T13:30:55.1556677Z         .replication_specs[0].region_configs[0].electable_specs.node_count: was
2025-09-01T13:30:55.1557115Z         cty.NumberIntVal(3), but now null.
2025-09-01T13:30:55.1557510Z         
2025-09-01T13:30:55.1557953Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-01T13:30:55.1558346Z         issue tracker.
2025-09-01T13:30:55.1558549Z         
2025-09-01T13:30:55.1558899Z         Error: Provider produced inconsistent result after apply
2025-09-01T13:30:55.1559204Z         
2025-09-01T13:30:55.1559611Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-01T13:30:55.1560208Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-01T13:30:55.1560616Z         unexpected new value:
2025-09-01T13:30:55.1561107Z         .replication_specs[0].region_configs[0].backing_provider_name: was null, but
2025-09-01T13:30:55.1561534Z         now cty.StringVal("AWS").
2025-09-01T13:30:55.1561770Z         
2025-09-01T13:30:55.1562193Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-01T13:30:55.1562576Z         issue tracker.
2025-09-01T13:30:55.1562784Z         
2025-09-01T13:30:55.1563140Z         Error: Provider produced inconsistent result after apply
2025-09-01T13:30:55.1563452Z         
2025-09-01T13:30:55.1563861Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-01T13:30:55.1564458Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-01T13:30:55.1565079Z         unexpected new value: .replication_specs[0].region_configs[0].provider_name:
2025-09-01T13:30:55.1565623Z         was cty.StringVal("AWS"), but now cty.StringVal("TENANT").
2025-09-01T13:30:55.1565932Z         
2025-09-01T13:30:55.1566358Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-01T13:30:55.1566741Z         issue tracker.
2025-09-01T13:30:55.1568452Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (2287.05s)
```

  - PASS 39 minutes
  - PASS 32 minutes
  - PASS 32 minutes
- 2025-09-02

### Error 2025-09-02T01:38:03+00:00
```
2025-09-02T01:38:03.1560540Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-02T01:38:03.1561855Z     resource_advanced_cluster_test.go:169: Adding variable groupId=68b63a03b3a1cd7a1661d314
2025-09-02T01:38:03.1563118Z     resource_advanced_cluster_test.go:169: Adding variable clusterName=test-acc-tf-c-4795634500178313452
2025-09-02T01:38:03.1682796Z === CONT  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-02T01:38:03.1759015Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-02T01:38:03.1760500Z     pre_check.go:40: Time before creating cluster: 2025-09-02T00:30:21.501895208Z, ProjectID: 68b63a03b3a1cd7a1661d314, Cluster name: test-acc-tf-c-4795634500178313452
2025-09-02T01:38:03.1789862Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-02T01:38:03.1791020Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName2=test-acc-tf-c-7079036697794612018
2025-09-02T01:38:03.1792702Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName3=test-acc-tf-c-7513437251598234280
2025-09-02T01:38:03.1794156Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName4=test-acc-tf-c-7374934850451886691
2025-09-02T01:38:03.1795769Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName5=test-acc-tf-c-4991237554211329365
2025-09-02T01:38:03.1797242Z     http_mocker_config_capture.go:112: Adding variable clusterName to clusterName6=test-acc-tf-c-7549525940102564288
2025-09-02T01:38:03.1926440Z === NAME  TestAccMockableAdvancedCluster_tenantUpgrade
2025-09-02T01:38:03.1927429Z     resource_advanced_cluster_test.go:169: Step 2/3 error: Error running apply: exit status 1
2025-09-02T01:38:03.1928125Z         
2025-09-02T01:38:03.1928756Z         Error: Provider produced inconsistent result after apply
2025-09-02T01:38:03.1929299Z         
2025-09-02T01:38:03.1930035Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-02T01:38:03.1931117Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-02T01:38:03.1931999Z         unexpected new value:
2025-09-02T01:38:03.1932846Z         .replication_specs[0].region_configs[0].electable_specs.node_count: was
2025-09-02T01:38:03.1933630Z         cty.NumberIntVal(3), but now null.
2025-09-02T01:38:03.1934081Z         
2025-09-02T01:38:03.1934848Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-02T01:38:03.1935527Z         issue tracker.
2025-09-02T01:38:03.1935889Z         
2025-09-02T01:38:03.1936514Z         Error: Provider produced inconsistent result after apply
2025-09-02T01:38:03.1937048Z         
2025-09-02T01:38:03.1937771Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-02T01:38:03.1938833Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-02T01:38:03.1939566Z         unexpected new value:
2025-09-02T01:38:03.1940414Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-09-02T01:38:03.1941303Z         cty.StringVal("M10"), but now cty.StringVal("M0").
2025-09-02T01:38:03.1941947Z         
2025-09-02T01:38:03.1942714Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-02T01:38:03.1943391Z         issue tracker.
2025-09-02T01:38:03.1943742Z         
2025-09-02T01:38:03.1944365Z         Error: Provider produced inconsistent result after apply
2025-09-02T01:38:03.1944903Z         
2025-09-02T01:38:03.1945644Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-02T01:38:03.1946709Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-02T01:38:03.1947810Z         unexpected new value: .replication_specs[0].region_configs[0].provider_name:
2025-09-02T01:38:03.1948790Z         was cty.StringVal("AWS"), but now cty.StringVal("TENANT").
2025-09-02T01:38:03.1949327Z         
2025-09-02T01:38:03.1950082Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-02T01:38:03.1950761Z         issue tracker.
2025-09-02T01:38:03.1951111Z         
2025-09-02T01:38:03.1951907Z         Error: Provider produced inconsistent result after apply
2025-09-02T01:38:03.1952846Z         
2025-09-02T01:38:03.1953535Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-09-02T01:38:03.1954471Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-02T01:38:03.1955376Z         unexpected new value:
2025-09-02T01:38:03.1956150Z         .replication_specs[0].region_configs[0].backing_provider_name: was null, but
2025-09-02T01:38:03.1956817Z         now cty.StringVal("AWS").
2025-09-02T01:38:03.1957191Z         
2025-09-02T01:38:03.1957890Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-02T01:38:03.1958458Z         issue tracker.
2025-09-02T01:38:03.1958879Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (2395.21s)
```

- 2025-09-03 PASS 42 minutes
- 2025-09-04 PASS 37 minutes