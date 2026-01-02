# serverless/serverlessinstance/TestAccServerlessInstance_withTags Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-05 00:30](#error-2025-12-05t0030330000) | CheckFailure for serverless_instances.test at Step: 2 Checks: 9,10,11 | dev | timeout | 1570.07s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 11 minutes
- 2025-12-05

### Error 2025-12-05T00:30:33+00:00
```
2025-12-05T00:30:33.2179903Z === RUN   TestAccServerlessInstance_withTags
2025-12-05T00:30:33.2183803Z === CONT  TestAccServerlessInstance_withTags
2025-12-05T00:36:43.7698076Z === NAME  TestAccServerlessInstance_withTags
2025-12-05T00:36:43.7699226Z     resource_serverless_instance_test.go:30: Step 2/3 error: Check failed: Check 9/11 error: data.mongodbatlas_serverless_instances.test: Attribute 'results.0.tags.#' expected "2", got "0"
2025-12-05T00:36:43.7733177Z         Check 10/11 error: "data.mongodbatlas_serverless_instances.test" no TypeSet element "results.0.tags.*", with nested attrs map[string]string{"key":"key 1", "value":"value 1"} in state: map[string]string{"%":"3", "id":"terraform-20251205003643512800000011", "project_id":"693227a6d8fee67d5d5d1bf9", "results.#":"4", "results.0.%":"16", "results.0.auto_indexing":"true", "results.0.connection_strings_private_endpoint_srv.#":"0", "results.0.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-819555319.4iv574y.mongodb-dev.net", "results.0.continuous_backup_enabled":"true", "results.0.create_date":"2025-12-05T00:30:34Z", "results.0.id":"693227aad8fee67d5d5d4116", "results.0.links.#":"3", "results.0.links.0.%":"2", "results.0.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-8195553193655468876", "results.0.links.0.rel":"self", "results.0.links.1.%":"2", "results.0.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-8195553193655468876/backup/restoreJobs", "results.0.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.0.links.2.%":"2", "results.0.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-8195553193655468876/backup/snapshots", "results.0.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.0.mongo_db_version":"8.0.12", "results.0.name":"test-acc-tf-c-8195553193655468876", "results.0.project_id":"", "results.0.provider_settings_backing_provider_name":"AWS", "results.0.provider_settings_provider_name":"SERVERLESS", "results.0.provider_settings_region_name":"US_EAST_1", "results.0.state_name":"DELETING", "results.0.tags.#":"0", "results.0.termination_protection_enabled":"false", "results.1.%":"16", "results.1.auto_indexing":"false", "results.1.connection_strings_private_endpoint_srv.#":"0", "results.1.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-283577255.0l625km.mongodb-dev.net", "results.1.continuous_backup_enabled":"true", "results.1.create_date":"2025-12-05T00:30:34Z", "results.1.id":"693227aad8fee67d5d5d4114", "results.1.links.#":"3", "results.1.links.0.%":"2", "results.1.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-2835772558602375600", "results.1.links.0.rel":"self", "results.1.links.1.%":"2", "results.1.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-2835772558602375600/backup/restoreJobs", "results.1.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.1.links.2.%":"2", "results.1.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-2835772558602375600/backup/snapshots", "results.1.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.1.mongo_db_version":"8.0.12", "results.1.name":"test-acc-tf-c-2835772558602375600", "results.1.project_id":"", "results.1.provider_settings_backing_provider_name":"AWS", "results.1.provider_settings_provider_name":"SERVERLESS", "results.1.provider_settings_region_name":"US_EAST_1", "results.1.state_name":"IDLE", "results.1.tags.#":"2", "results.1.tags.0.%":"2", "results.1.tags.0.key":"key 1", "results.1.tags.0.value":"value 1", "results.1.tags.1.%":"2", "results.1.tags.1.key":"key 2", "results.1.tags.1.value":"value 2", "results.1.termination_protection_enabled":"false", "results.2.%":"16", "results.2.auto_indexing":"false", "results.2.connection_strings_private_endpoint_srv.#":"0", "results.2.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-826155015.ykatjl8.mongodb-dev.net", "results.2.continuous_backup_enabled":"true", "results.2.create_date":"2025-12-05T00:30:35Z", "results.2.id":"693227abd8fee67d5d5d4b59", "results.2.links.#":"3", "results.2.links.0.%":"2", "results.2.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-8261550157324897207", "results.2.links.0.rel":"self", "results.2.links.1.%":"2", "results.2.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-8261550157324897207/backup/restoreJobs", "results.2.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.2.links.2.%":"2", "results.2.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-8261550157324897207/backup/snapshots", "results.2.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.2.mongo_db_version":"8.0.12", "results.2.name":"test-acc-tf-c-8261550157324897207", "results.2.project_id":"", "results.2.provider_settings_backing_provider_name":"AWS", "results.2.provider_settings_provider_name":"SERVERLESS", "results.2.provider_settings_region_name":"US_EAST_1", "results.2.state_name":"DELETING", "results.2.tags.#":"0", "results.2.termination_protection_enabled":"false", "results.3.%":"16", "results.3.auto_indexing":"false", "results.3.connection_strings_private_endpoint_srv.#":"0", "results.3.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-770105654.rr1oqg1.mongodb-dev.net", "results.3.continuous_backup_enabled":"true", "results.3.create_date":"2025-12-05T00:30:34Z", "results.3.id":"693227aad8fee67d5d5d4126", "results.3.links.#":"3", "results.3.links.0.%":"2", "results.3.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-7701056549805812035", "results.3.links.0.rel":"self", "results.3.links.1.%":"2", "results.3.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-7701056549805812035/backup/restoreJobs", "results.3.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.3.links.2.%":"2", "results.3.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-7701056549805812035/backup/snapshots", "results.3.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.3.mongo_db_version":"8.0.12", "results.3.name":"test-acc-tf-c-7701056549805812035", "results.3.project_id":"", "results.3.provider_settings_backing_provider_name":"AWS", "results.3.provider_settings_provider_name":"SERVERLESS", "results.3.provider_settings_region_name":"US_EAST_1", "results.3.state_name":"DELETING", "results.3.tags.#":"0", "results.3.termination_protection_enabled":"false"}
2025-12-05T00:36:43.7794130Z         Check 11/11 error: "data.mongodbatlas_serverless_instances.test" no TypeSet element "results.0.tags.*", with nested attrs map[string]string{"key":"key 2", "value":"value 2"} in state: map[string]string{"%":"3", "id":"terraform-20251205003643512800000011", "project_id":"693227a6d8fee67d5d5d1bf9", "results.#":"4", "results.0.%":"16", "results.0.auto_indexing":"true", "results.0.connection_strings_private_endpoint_srv.#":"0", "results.0.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-819555319.4iv574y.mongodb-dev.net", "results.0.continuous_backup_enabled":"true", "results.0.create_date":"2025-12-05T00:30:34Z", "results.0.id":"693227aad8fee67d5d5d4116", "results.0.links.#":"3", "results.0.links.0.%":"2", "results.0.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-8195553193655468876", "results.0.links.0.rel":"self", "results.0.links.1.%":"2", "results.0.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-8195553193655468876/backup/restoreJobs", "results.0.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.0.links.2.%":"2", "results.0.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-8195553193655468876/backup/snapshots", "results.0.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.0.mongo_db_version":"8.0.12", "results.0.name":"test-acc-tf-c-8195553193655468876", "results.0.project_id":"", "results.0.provider_settings_backing_provider_name":"AWS", "results.0.provider_settings_provider_name":"SERVERLESS", "results.0.provider_settings_region_name":"US_EAST_1", "results.0.state_name":"DELETING", "results.0.tags.#":"0", "results.0.termination_protection_enabled":"false", "results.1.%":"16", "results.1.auto_indexing":"false", "results.1.connection_strings_private_endpoint_srv.#":"0", "results.1.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-283577255.0l625km.mongodb-dev.net", "results.1.continuous_backup_enabled":"true", "results.1.create_date":"2025-12-05T00:30:34Z", "results.1.id":"693227aad8fee67d5d5d4114", "results.1.links.#":"3", "results.1.links.0.%":"2", "results.1.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-2835772558602375600", "results.1.links.0.rel":"self", "results.1.links.1.%":"2", "results.1.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-2835772558602375600/backup/restoreJobs", "results.1.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.1.links.2.%":"2", "results.1.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-2835772558602375600/backup/snapshots", "results.1.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.1.mongo_db_version":"8.0.12", "results.1.name":"test-acc-tf-c-2835772558602375600", "results.1.project_id":"", "results.1.provider_settings_backing_provider_name":"AWS", "results.1.provider_settings_provider_name":"SERVERLESS", "results.1.provider_settings_region_name":"US_EAST_1", "results.1.state_name":"IDLE", "results.1.tags.#":"2", "results.1.tags.0.%":"2", "results.1.tags.0.key":"key 1", "results.1.tags.0.value":"value 1", "results.1.tags.1.%":"2", "results.1.tags.1.key":"key 2", "results.1.tags.1.value":"value 2", "results.1.termination_protection_enabled":"false", "results.2.%":"16", "results.2.auto_indexing":"false", "results.2.connection_strings_private_endpoint_srv.#":"0", "results.2.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-826155015.ykatjl8.mongodb-dev.net", "results.2.continuous_backup_enabled":"true", "results.2.create_date":"2025-12-05T00:30:35Z", "results.2.id":"693227abd8fee67d5d5d4b59", "results.2.links.#":"3", "results.2.links.0.%":"2", "results.2.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-8261550157324897207", "results.2.links.0.rel":"self", "results.2.links.1.%":"2", "results.2.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-8261550157324897207/backup/restoreJobs", "results.2.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.2.links.2.%":"2", "results.2.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-8261550157324897207/backup/snapshots", "results.2.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.2.mongo_db_version":"8.0.12", "results.2.name":"test-acc-tf-c-8261550157324897207", "results.2.project_id":"", "results.2.provider_settings_backing_provider_name":"AWS", "results.2.provider_settings_provider_name":"SERVERLESS", "results.2.provider_settings_region_name":"US_EAST_1", "results.2.state_name":"DELETING", "results.2.tags.#":"0", "results.2.termination_protection_enabled":"false", "results.3.%":"16", "results.3.auto_indexing":"false", "results.3.connection_strings_private_endpoint_srv.#":"0", "results.3.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-770105654.rr1oqg1.mongodb-dev.net", "results.3.continuous_backup_enabled":"true", "results.3.create_date":"2025-12-05T00:30:34Z", "results.3.id":"693227aad8fee67d5d5d4126", "results.3.links.#":"3", "results.3.links.0.%":"2", "results.3.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-7701056549805812035", "results.3.links.0.rel":"self", "results.3.links.1.%":"2", "results.3.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-7701056549805812035/backup/restoreJobs", "results.3.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.3.links.2.%":"2", "results.3.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/693227a6d8fee67d5d5d1bf9/serverless/test-acc-tf-c-7701056549805812035/backup/snapshots", "results.3.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.3.mongo_db_version":"8.0.12", "results.3.name":"test-acc-tf-c-7701056549805812035", "results.3.project_id":"", "results.3.provider_settings_backing_provider_name":"AWS", "results.3.provider_settings_provider_name":"SERVERLESS", "results.3.provider_settings_region_name":"US_EAST_1", "results.3.state_name":"DELETING", "results.3.tags.#":"0", "results.3.termination_protection_enabled":"false"}
2025-12-05T00:53:41.7202416Z   
2025-12-05T00:56:43.8812501Z === NAME  TestAccServerlessInstance_withTags
2025-12-05T00:56:43.8814663Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-12-05T00:56:43.8815073Z         
2025-12-05T00:56:43.8815685Z         Error: error deleting MongoDB Serverless Instance (test-acc-tf-c-2835772558602375600): context deadline exceeded
2025-12-05T00:56:43.8816148Z         
2025-12-05T00:56:43.8816410Z --- FAIL: TestAccServerlessInstance_withTags (1570.66s)
```

- 2025-12-06 PASS 10 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 10 minutes
- 2025-12-09 PASS 10 minutes
- 2025-12-10
  - PASS 10 minutes
  - PASS 10 minutes
- 2025-12-11 PASS 10 minutes
- 2025-12-12 PASS 10 minutes
- 2025-12-13 PASS 10 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 10 minutes
- 2025-12-16 PASS 10 minutes
- 2025-12-17 PASS 10 minutes
- 2025-12-18 PASS 12 minutes
- 2025-12-19 PASS 10 minutes
- 2025-12-20 PASS 10 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 10 minutes
- 2025-12-23 PASS 10 minutes
- 2025-12-24 PASS 10 minutes
- 2025-12-25 PASS 12 minutes
- 2025-12-26 PASS 10 minutes
- 2025-12-27 PASS 10 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 10 minutes
- 2025-12-31 PASS 11 minutes
- 2026-01-01 PASS 10 minutes
- 2026-01-02 PASS 10 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 10 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 10 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 10 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 10 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 10 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
