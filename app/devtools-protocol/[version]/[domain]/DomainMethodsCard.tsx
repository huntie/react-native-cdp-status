import { ProtocolMetadata } from '@/data/protocols';
import React from 'react';
import { ProtocolImplementationData } from '../data';
import { Card } from '@/ui/components/Card';
import { DomainMemberDescription } from './DomainMemberDescription';
import { DomainMemberParameters } from './DomainMemberParameters';
import { DomainMethodReturnObject } from './DomainMethodReturnObject';
import { DomainMemberHeading } from './DomainMemberHeading';
import { Protocol } from '@/third-party/protocol-schema';

export function DomainMethodsCard({
  domain,
  protocolImplementationData,
  protocolMetadata,
}: {
  domain: Protocol.Domain;
  protocolImplementationData: ProtocolImplementationData;
  protocolMetadata: ProtocolMetadata;
}) {
  return (
    domain.commands != null &&
    domain.commands?.length !== 0 && (
      <>
        <h2 className="font-bold text-lg mt-4 mb-2 max-w-4xl mx-auto">
          Methods
        </h2>
        <Card>
          {domain.commands.map((command, index) => (
            <div key={command.name} className="group">
              {/* add horizontal separator if not the first item */}
              {index > 0 && <hr className="my-4" />}
              <DomainMemberHeading
                kind="method"
                member={command}
                domain={domain.domain}
                protocolImplementationData={protocolImplementationData}
                protocolMetadata={protocolMetadata}
              />
              <DomainMemberDescription member={command} />
              <DomainMemberParameters
                member={command}
                domain={domain.domain}
                versionSlug={protocolMetadata.versionSlug}
              />
              <DomainMethodReturnObject
                command={command}
                domain={domain.domain}
                versionSlug={protocolMetadata.versionSlug}
              />
            </div>
          ))}
        </Card>
      </>
    )
  );
}
