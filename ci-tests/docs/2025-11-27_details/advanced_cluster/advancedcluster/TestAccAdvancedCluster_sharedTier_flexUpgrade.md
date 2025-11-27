# advanced_cluster/advancedcluster/TestAccAdvancedCluster_sharedTier_flexUpgrade Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, SKIP(x 20) PASS(x 10) FAIL(x 3)
Success rate: 76.92%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-06 00:27](#error-2025-11-06t0027250000) |  | dev | 466.09s
[2025-11-07 00:28](#error-2025-11-07t0028020000) |  | dev | 440.02s
[2025-11-08 00:29](#error-2025-11-08t0029010000) |  | dev | 414.09s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 11 minutes
- 2025-10-30 PASS 7 minutes
- 2025-10-31 PASS 7 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 6 minutes
- 2025-11-04 PASS 5 minutes
- 2025-11-05
  - PASS 7 minutes
  - PASS 6 minutes
- 2025-11-06

### Error 2025-11-06T00:27:25+00:00
```
2025-11-06T00:27:25.1872923Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-06T00:29:11.2684516Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-06T00:29:51.2580055Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-06T00:29:51.2582683Z     pre_check.go:46: Time before creating cluster: 2025-11-06T00:29:51.257647057Z, ProjectID: 690beb6bb0a5510b327ca4ff, Cluster name: test-acc-tf-c-9117943402257094767
2025-11-06T00:35:35.8092958Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-06T00:35:35.8093631Z     resource_test.go:86: Step 2/2 error: Error running apply: exit status 1
2025-11-06T00:35:35.8094341Z         
2025-11-06T00:35:35.8094930Z         Error: error reading  advanced cluster list
2025-11-06T00:35:35.8095313Z         
2025-11-06T00:35:35.8095782Z           with data.mongodbatlas_advanced_clusters.test,
2025-11-06T00:35:35.8096576Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-11-06T00:35:35.8097229Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-11-06T00:35:35.8097570Z         
2025-11-06T00:35:35.8097908Z         project ID 690beb6bb0a5510b327ca4ff. Error
2025-11-06T00:35:35.8098602Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6bb0a5510b327ca4ff/clusters
2025-11-06T00:35:35.8099187Z         GET: HTTP 400 Bad Request (Error code:
2025-11-06T00:35:35.8099735Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-11-06T00:35:35.8100446Z         test-acc-tf-c-3741508550106808748 cannot be used in the Cluster API. Reason:
2025-11-06T00:35:35.8101176Z         Bad Request. Params: [test-acc-tf-c-3741508550106808748], BadRequestDetail: 
2025-11-06T00:36:58.1628110Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (466.90s)
```

- 2025-11-07

### Error 2025-11-07T00:28:02+00:00
```
2025-11-07T00:28:02.7649187Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-07T00:29:39.1165609Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-07T00:30:49.1257061Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-07T00:30:49.1258956Z     pre_check.go:46: Time before creating cluster: 2025-11-07T00:30:49.125394497Z, ProjectID: 690d3d0fa78815557f58c592, Cluster name: test-acc-tf-c-8915561565920588802
2025-11-07T00:35:46.7017211Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-07T00:35:46.7017683Z     resource_test.go:86: Step 2/2 error: Error running apply: exit status 1
2025-11-07T00:35:46.7018089Z         
2025-11-07T00:35:46.7018380Z         Error: error reading  advanced cluster list
2025-11-07T00:35:46.7018719Z         
2025-11-07T00:35:46.7019058Z           with data.mongodbatlas_advanced_clusters.test,
2025-11-07T00:35:46.7019710Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-11-07T00:35:46.7020419Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-11-07T00:35:46.7020701Z         
2025-11-07T00:35:46.7020982Z         project ID 690d3d0fa78815557f58c592. Error
2025-11-07T00:35:46.7021704Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690d3d0fa78815557f58c592/clusters
2025-11-07T00:35:46.7022254Z         GET: HTTP 400 Bad Request (Error code:
2025-11-07T00:35:46.7022687Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-11-07T00:35:46.7023231Z         test-acc-tf-c-3211355284320255794 cannot be used in the Cluster API. Reason:
2025-11-07T00:35:46.7023816Z         Bad Request. Params: [test-acc-tf-c-3211355284320255794], BadRequestDetail: 
2025-11-07T00:36:59.3072896Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (440.19s)
```

- 2025-11-08

### Error 2025-11-08T00:29:01+00:00
```
2025-11-08T00:29:01.8132348Z === RUN   TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-08T00:31:08.7764571Z === CONT  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-08T00:31:43.7471657Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-08T00:31:43.7473877Z     pre_check.go:46: Time before creating cluster: 2025-11-08T00:31:43.7467928Z, ProjectID: 690e8ecb0887d8385bbd339d, Cluster name: test-acc-tf-c-271108340439751507
2025-11-08T00:37:01.5092843Z === NAME  TestAccAdvancedCluster_sharedTier_flexUpgrade
2025-11-08T00:37:01.5093590Z     resource_test.go:86: Step 2/2 error: Error running apply: exit status 1
2025-11-08T00:37:01.5094291Z         
2025-11-08T00:37:01.5094793Z         Error: error reading  advanced cluster list
2025-11-08T00:37:01.5095098Z         
2025-11-08T00:37:01.5095606Z           with data.mongodbatlas_advanced_clusters.test,
2025-11-08T00:37:01.5096430Z           on terraform_plugin_test.tf line 37, in data "mongodbatlas_advanced_clusters" "test":
2025-11-08T00:37:01.5097000Z           37: 	data "mongodbatlas_advanced_clusters" "test" {
2025-11-08T00:37:01.5097604Z         
2025-11-08T00:37:01.5097988Z         project ID 690e8ecb0887d8385bbd339d. Error
2025-11-08T00:37:01.5098592Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690e8ecb0887d8385bbd339d/clusters
2025-11-08T00:37:01.5099101Z         GET: HTTP 400 Bad Request (Error code:
2025-11-08T00:37:01.5099560Z         "CANNOT_USE_FLEX_CLUSTER_IN_CLUSTER_API") Detail: Flex cluster
2025-11-08T00:37:01.5100176Z         test-acc-tf-c-1940384098746198210 cannot be used in the Cluster API. Reason:
2025-11-08T00:37:01.5100810Z         Bad Request. Params: [test-acc-tf-c-1940384098746198210], BadRequestDetail: 
2025-11-08T00:38:03.6450231Z --- FAIL: TestAccAdvancedCluster_sharedTier_flexUpgrade (414.88s)
```

- 2025-11-09: MISSING
- 2025-11-10 PASS 6 minutes
- 2025-11-11 SKIP unknown
- 2025-11-12 SKIP unknown
- 2025-11-13 SKIP unknown
- 2025-11-14 SKIP unknown
- 2025-11-15 SKIP unknown
- 2025-11-16: MISSING
- 2025-11-17 SKIP unknown
- 2025-11-18 SKIP unknown
- 2025-11-19
  - SKIP unknown
  - SKIP unknown
- 2025-11-20
  - SKIP unknown
  - SKIP unknown
- 2025-11-21 SKIP unknown
- 2025-11-22 SKIP unknown
- 2025-11-23: MISSING
- 2025-11-24 SKIP unknown
- 2025-11-25 SKIP unknown
- 2025-11-26 SKIP unknown
- 2025-11-27 SKIP unknown

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 5 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 5 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 SKIP unknown
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 SKIP unknown
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 SKIP unknown
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
